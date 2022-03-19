export class StorageWrapper {
  store: any;
  isSupported: boolean;

  constructor(type: string) {
    this.store = window[`${type}Storage`];
    this.isSupported = typeof Storage === "function";
  }

  set(key: string, value: object): void {
    this.store.setItem(key, JSON.stringify(value));
  }

  get(key: string): object {
    return JSON.parse(this.store.getItem(key));
  }

  remove(key: string): void {
    this.store.removeItem(key);
  }

  empty(): void {
    this.store.clear();
  }
}
