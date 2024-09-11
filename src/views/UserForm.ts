import { User } from '../models/Users';

export class UserForm {
  //Parent element
  constructor(public parent: HTMLElement, public model: User) {
    this.model.on('change', () => {
      this.render();
    });
  }

  addEventListeners(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.handleNewRandomAge,
      'click:.set-name': this.handleNewName,
    };
  }

  handleNewRandomAge = () => {
    this.model.generateRandomAge();
  };

  handleNewName = () => {
    const name = document.getElementById('input-name') as HTMLInputElement;
    if (name) {
      this.model.set({ name: name.value });
    }
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
  template(): string {
    return `
    <div>
      <h1>UserForm</h1>
      <p>User Name: ${this.model.get('name')}</p>
      <p>User age: ${this.model.get('age')}</p>
      <input type="text" id="input-name" />
      <button class="set-name">Update name</button>
      <button class="set-age">Generate Random Age</button>
    </div>
  `;
  }

  render(): void {
    const newElement = document.createElement('template');
    newElement.innerHTML = this.template();
    this.bindEvents(newElement.content);
    this.parent.innerHTML = '';
    this.parent.append(newElement.content);
  }
}
