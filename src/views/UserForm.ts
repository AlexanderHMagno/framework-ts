export class UserForm {
  //Parent element
  eventList: { [key: string]: () => void } = {};
  constructor(public parent: HTMLElement) {}

  addEventListeners(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseout:input': this.onMouseOut,
    };
  }

  onButtonClick() {
    console.log('im here');
  }

  onMouseOut() {
    console.log('ale');
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
  template(): string {
    return `
    <div>
      <h1>UserForm</h1>
      <input type="text" />
      <button>Click me</button>
    </div>
  `;
  }

  render(): void {
    const newElement = document.createElement('template');
    newElement.innerHTML = this.template();
    this.bindEvents(newElement.content);
    this.parent.append(newElement.content);
  }
}
