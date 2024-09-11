import { User, UserProps } from '../models/Users';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  //Override
  addEventListeners(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.handleNewRandomAge,
      'click:.set-name': this.handleNewName,
      'click:.save': this.handleSave,
    };
  }

  handleSave = () => {
    this.model.save();
  };
  handleNewRandomAge = () => {
    this.model.generateRandomAge();
  };

  handleNewName = () => {
    const name = document.getElementById('input-name') as HTMLInputElement;

    if (name.value) {
      this.model.set({ name: name.value });
    }
  };

  template(): string {
    return `
    <div>
      <h1>UserForm</h1>
      <p>User Name: ${this.model.get('name')}</p>
      <p>User age: ${this.model.get('age')}</p>
      <input type="text" id="input-name" />
      <button class="set-name">Update name</button>
      <button class="set-age">Generate Random Age</button>
      <button class="save">Save User</button>
    </div>
  `;
  }
}
