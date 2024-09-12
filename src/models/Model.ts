import { AxiosResponse, AxiosPromise } from 'axios';

interface Event {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface Attribute<T> {
  get<K extends keyof T>(propName: K): T[K];
  set(update: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: string): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface hasId {
  id?: string;
}
export class Model<T extends hasId> {
  // 'http://localhost:3000/users'

  constructor(
    private events: Event,
    private attr: Attribute<T>,
    private sync: Sync<T>
  ) {}

  //events
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attr.get;

  set(form: T) {
    this.attr.set(form);
    this.events.trigger('change');
  }

  async fetch(): Promise<void> {
    const id = this.get('id');

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
    const data: T = this.attr.getAll();
    this.sync
      .save(data)
      .then((response: AxiosResponse) => {
        // this.trigger('save');
        this.set(response.data);
      })
      .catch((e: Error) => this.trigger('error'));
  }
}
