import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { map } from 'rxjs/internal/operators';

import { Config } from './models/config';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient,
    @Inject('config') private config: Config
  ) { }

  get() {
    // this._request(this.store[key || this.key], key || this.key)
    // .subscribe(
    //   () => {
    //     this.store[key || this.key] = [
    //         { name: 'Zoe' },
    //         { name: 'Jey' },
    //         { name: 'Zoe' },
    //         { name: 'Jey' },
    //         { name: 'Zoe' },
    //         { name: 'Jey' },
    //         { name: 'Zoe' },
    //         { name: 'Jey' },
    //         { name: 'Zoe' },
    //         { name: 'Jey' },
    //         { name: 'Zoe' },
    //         { name: 'Jey' }
    //       ];
    //   }
    // );
  }

  private _request(data: object[], key?: string) {
    return from(data)
    .pipe(delay(5000));
    // const req = new HttpRequest('POST', '/upload/file', null, {
    //   reportProgress: true
    // });
    // this.http.request(req);
  }

}
