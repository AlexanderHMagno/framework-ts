import { Model, hasId } from '../models/Model';

export abstract class View<T extends Model<K>, K extends hasId> {
  regions: { [key: string]: Element } = {};
  abstract template(): string;
  //Parent element
  constructor(public parent: HTMLElement, public model: T) {
    this.bindModel();
  }

  addEventListeners(): { [key: string]: () => void } {
    return {};
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  bindModel = () => {
    this.model.on('change', () => {
      this.render();
    });

    this.model.on('save', () => {
      console.log('Entity has been saved');
    });
  };

  bindRegions(fragment: DocumentFragment) {
    const regionsMaps = this.regionsMap();
    for (let region in regionsMaps) {
      const element = fragment.querySelector(regionsMaps[region]);
      if (element) {
        this.regions[region] = element;
      }
    }
  }
  bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.addEventListeners();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment
        .querySelectorAll(selector)
        .forEach((element) =>
          element.addEventListener(eventName, eventsMap[eventKey])
        );
    }
  }

  onRender(): void {}

  render(): void {
    const newElement = document.createElement('template');
    newElement.innerHTML = this.template();
    this.bindEvents(newElement.content);
    this.bindRegions(newElement.content);
    this.onRender();
    this.parent.innerHTML = '';
    this.parent.append(newElement.content);
  }
}
