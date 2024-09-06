type Callback = () => void;

export class Eventing {
  private events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const eventFull = this.events[eventName] || [];
    eventFull.push(callback);
    this.events[eventName] = eventFull;
  };

  trigger = (eventName: string): void => {
    const evento = this.events[eventName];

    if (evento) {
      evento.forEach((cb: Callback) => cb());
    }
  };
}
