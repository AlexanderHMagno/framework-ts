// import { User } from './models/Users';

import { UserForm } from './views/UserForm';

// const collection = User.getAllUsers();

// collection.on('change', () => console.log(collection.data));

// collection.fetch();

const injector = new UserForm(document.getElementById('root') as HTMLElement);

injector.render();
