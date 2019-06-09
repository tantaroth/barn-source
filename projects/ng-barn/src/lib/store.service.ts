import { Injectable, Inject } from "@angular/core";

import { Config } from "./models/config";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private key: string;
  private store: object = {};
  private options: object = {};

  constructor(@Inject("config") private config: Config) {
    if (
      config.store &&
      typeof config.store === "object" &&
      Object.keys(config.store).length > 0
    ) {
      this.store = { ...this.store, ...config.store };
    }
  }

  hot() {
    return {
      key: this.key,
      store: this.store
    };
  }

  select(key: string, options?: object) {
    this.key = key;
    this.options = options;
  }

  get(key?: string) {
    return this.store[key || this.key];
  }

  set(data: object, key?: string) {
    const frozenList = this.store[key || this.key];

    this.store[key || this.key] = data;

    const response = this.store[key || this.key];

    Object.defineProperty(response, "previous", {
      value: {
        list: frozenList
      },
      writable: false
    });

    return response;
  }

  push(data: object, key?: string) {
    const frozenList = this.store[key || this.key];

    this.store[key || this.key].push(data);

    const index = this.store[key || this.key].length - 1;
    const response = this.store[key || this.key];

    Object.defineProperty(response, "index", {
      value: index,
      enumerable: true,
      writable: false
    });

    Object.defineProperty(response, "previous", {
      value: {
        data: frozenList[index],
        list: frozenList
      },
      writable: false
    });

    return response;
  }

  update(index: number, data: object, key?: string) {
    const frozenList = this.store[key || this.key];

    this.store[key || this.key][index] = {
      ...this.store[key || this.key][index],
      ...data
    };

    const response = this.store[key || this.key];

    Object.defineProperty(response, "index", {
      value: index,
      enumerable: true,
      writable: false
    });

    Object.defineProperty(response, "previous", {
      value: {
        data: frozenList[index],
        list: frozenList
      },
      writable: false
    });

    return response;
  }

  delete(index: number, key?: string) {
    const frozenList = this.store[key || this.key];

    this.store[key || this.key].splice(index, 1);

    const response = this.store[key || this.key];

    Object.defineProperty(response, "index", {
      value: index,
      enumerable: true,
      writable: false
    });

    Object.defineProperty(response, "previous", {
      value: {
        data: frozenList[index],
        list: frozenList
      },
      writable: false
    });

    return response;
  }
}
