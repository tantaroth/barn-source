import { Injectable, Inject } from '@angular/core';

import { Config } from './models/config';

@Injectable({
  providedIn: 'root'
})
export class NgBarnService {

  private key: string;
  private store: object = {};
  private options: object = {};

  constructor(
    @Inject('config') private config: Config
  ) {
    if (
      config.store &&
      typeof config.store === 'object' &&
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
    this.store[key || this.key] = data;

    return this.store[key || this.key];
  }

  push(data: object, key?: string) {
    this.store[key || this.key].push(data);

    return this.store[key || this.key];
  }

  update(index: number, data: object, key?: string) {
    this.store[key || this.key][index] = { ...this.store[key || this.key][index], ...data};

    return this.store[key || this.key];
  }

  delete(index: number, key?: string) {
    this.store[key || this.key].splice(index, 1);

    return this.store[key || this.key];
  }

}
