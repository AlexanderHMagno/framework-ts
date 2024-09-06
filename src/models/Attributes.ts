export class Attributes<T extends Object> {
  constructor(public data: T) {}

  get = <K extends keyof T>(propName: K): T[K] => {
    return this.data[propName];
  };

  set = (update: T): void => {
    this.data = Object.assign(this.data, update);
  };
}
