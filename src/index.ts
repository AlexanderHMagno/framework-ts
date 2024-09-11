import { User } from './models/Users';

import { UserForm } from './views/UserForm';

// const collection = User.getAllUsers();

// collection.on('change', () => console.log(collection.data));

// collection.fetch();

const Alexander: User = User.buildUser({ name: 'Alexander', age: 22 });
const injector = new UserForm(
  document.getElementById('root') as HTMLElement,
  Alexander
);

injector.render();
