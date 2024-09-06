// 3) This class will contain the following ideas
// 	- data as interfact UserProps
// 	- get (propName string): string | number
// 	- set (update UserProps):void
// 	- on (eventName string, callback: () =>{}
// 	- trigger (eventName :string) : void
//         - fetch() : promise
// 	- save() : Promise

import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

export class User {
  private events: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync('http://localhost:3000/users');
  private attr: Attributes<UserProps>;
  constructor(private data: UserProps) {
    this.attr = new Attributes(data);
    console.log(this.attr.data);
  }

  //events
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }

  //attr
  get get() {
    return this.attr.get;
  }
  set(form: UserProps) {
    this.attr.set(form);
    this.events.trigger('change');
  }

  async fetch(): Promise<void> {
    const id = this.attr.data.id;

    if (!id) {
      throw new Error('ID not found');
    }

    try {
      const response: AxiosResponse = await this.sync.fetch(id);
      this.set(response.data);
    } catch (error) {
      throw error;
    }
  }

  save() {
    //Get data from the database
    const data: UserProps = this.attr.data;
    this.sync
      .save(data)
      .then((response: AxiosResponse) => {
        this.trigger('save');
      })
      .catch((e: Error) => this.trigger('error'));
  }
}
