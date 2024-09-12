import { Collection } from '../../models/Collection';
import { User, UserProps } from '../../models/Users';
import { View } from '../View';

export class CollectionUser extends View<User, UserProps> {
  collection: Collection<User, UserProps>;

  constructor(public parent: HTMLElement, public model: User) {
    super(parent, model);
    this.collection = User.getAllUsers();

    this.collection.on('change', () => {
      this.render();
    });

    this.collection.fetch();
  }

  parse(): string {
    const formCollection = this.collection.data.map((element) => {
      const name = element.get('name');
      if (name) {
        return `
          <li>
            <b>Name:</b>${name} - 
            <b>Age:</b> ${element.get('age')}
          </li>`;
      }
    });

    return formCollection.join();
  }

  template(): string {
    const formCollection = this.parse();
    return `
        <h1>List Of Users</h1>
        <ol >
          ${formCollection}
        </ol>
      `;
  }
}
