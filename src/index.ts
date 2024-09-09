import { User } from './models/Users';

const collection = User.getAllUsers();

collection.on('change', () => console.log(collection.data));

collection.fetch();
