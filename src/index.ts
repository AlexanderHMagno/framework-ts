import { User } from './models/Users';
import { UserEdit } from './views/User/UserEdit';

const newUSer: User = User.buildUser({});
const injector = new UserEdit(
  document.getElementById('root') as HTMLElement,
  newUSer
);

injector.render();
