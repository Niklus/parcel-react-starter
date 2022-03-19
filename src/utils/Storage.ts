export class StorageWrapper {
  store: any;
  isSupported: any;

  constructor(type: string) {
    this.store = window[`${type}Storage`];
    this.isSupported = typeof Storage === "function";
  }

  set(key, value): void {
    this.store.setItem(key, JSON.stringify(value));
  }

  get(key): object {
    return JSON.parse(this.store.getItem(key));
  }

  remove(key): void {
    this.store.removeItem(key);
  }

  empty(): void {
    this.store.clear();
  }
}
