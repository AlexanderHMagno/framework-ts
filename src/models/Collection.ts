import { Eventing } from './helpers/Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
  public data: T[] = [];
  private eventing: Eventing = new Eventing();
  constructor(private urlRoot: string, private deserialize: (entity: K) => T) {}

  get on() {
    return this.eventing.on;
  }

  get trigger() {
    return this.eventing.trigger;
  }

  fetch() {
    axios
      .get(this.urlRoot)
      .then((response: AxiosResponse) => {
        response.data.forEach((json: K) =>
          this.data.push(this.deserialize(json))
        );
      })
      .finally(() => {
        this.trigger('change');
      });
  }
}
