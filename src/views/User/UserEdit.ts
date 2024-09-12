import { User, UserProps } from '../../models/Users';
import { CollectionUser } from './CollectionView';
import { View } from '../View';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
      userList: '.user-list',
    };
  }

  onRender(): void {
    new UserShow(this.regions.userShow as HTMLElement, this.model).render();
    new UserForm(this.regions.userForm as HTMLElement, this.model).render();
    new CollectionUser(
      this.regions.userList as HTMLElement,
      this.model
    ).render();
  }

  template(): string {
    return `
      <div class="user-show"></div>
      <div class="user-form"></div>
      <div class="user-list"></div>
    `;
  }
}
