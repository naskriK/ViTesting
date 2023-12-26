export class Arr<T> {
  items: T[] = [];

  constructor(...items: T[]) {
    this.items = [...items];
  }

  push(item?: T) {
    if (!item) {
      return this.items[this.items.length - 1] ?? 0;
    }

    this.items.push(item);

    return item;
  }
}
