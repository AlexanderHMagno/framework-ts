import { User } from './models/Users';
import { UserEdit } from './views/User/UserEdit';

const Alexander: User = User.buildUser({ name: 'Alexander', age: 22 });
const injector = new UserEdit(
  document.getElementById('root') as HTMLElement,
  Alexander
);

injector.render();
