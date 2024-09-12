import { User, UserProps } from '../../models/Users';
import { View } from '../View';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <div>
          <h1>UserForm</h1>
          <p>User Name: ${this.model.get('name')}</p>
          <p>User age: ${this.model.get('age')}</p>
        </div>
      `;
  }
}
