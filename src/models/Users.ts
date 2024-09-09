import { Collection } from './Collection';
import { ApiSync } from './helpers/ApiSync';
import { Attributes } from './helpers/Attributes';
import { Eventing } from './helpers/Eventing';
import { Model } from './Model';

export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  //This is the default way to create a user, hardcoding the classes to be used to represent
  //the event system, attributes and the storage
  static buildUser(data: UserProps): User {
    return new User(
      new Eventing(),
      new Attributes<UserProps>(data),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static getAllUsers() {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }
}
