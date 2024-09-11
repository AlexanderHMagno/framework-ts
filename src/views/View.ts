import { Model, hasId } from '../models/Model';

export abstract class View<T extends Model<K>, K extends hasId> {
  abstract template(): string;
  //Parent element
  constructor(public parent: HTMLElement, public model: T) {
    this.bindModel();
  }

  addEventListeners(): { [key: string]: () => void } {
    return {};
  }

  bindModel = () => {
    this.model.on('change', () => {
      this.render();
    });

    this.model.on('save', () => {
      window.alert('Entity has been saved');
    });
  };

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

  render(): void {
    const newElement = document.createElement('template');
    newElement.innerHTML = this.template();
    this.bindEvents(newElement.content);
    this.parent.innerHTML = '';
    this.parent.append(newElement.content);
  }
}
