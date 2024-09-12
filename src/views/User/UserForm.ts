import { User, UserProps } from '../../models/Users';
import { View } from '../View';

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
        <input type="text" id="input-name" placeholder="${
          this.model.get('name') ?? 'Add name'
        }" />
        <button class="set-name">Update name</button>
        <button class="set-age">Generate Random Age</button>
        <button class="save">Save User</button>
      </div>
  `;
  }
}
