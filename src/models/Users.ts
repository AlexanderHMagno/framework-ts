// 3) This class will contain the following ideas
// 	- data as interfact UserProps
// 	- get (propName string): string | number
// 	- set (update UserProps):void
// 	- on (eventName string, callback: () =>{}
// 	- trigger (eventName :string) : void
//         - fetch() : promise
// 	- save() : Promise

import { ApiSync } from './helpers/ApiSync';
import { Attributes } from './helpers/Attributes';
import { Eventing } from './helpers/Eventing';
import { Model } from './Model';

export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  //This is the default way to create a user, hardcoding the classes to be used to represent
  //the event system, attributes and the storage
  static buildUser(data: UserProps): User {
    return new User(
      new Eventing(),
      new Attributes<UserProps>(data),
      new ApiSync<UserProps>('http://localhost:3000/users')
    );
  }
}
