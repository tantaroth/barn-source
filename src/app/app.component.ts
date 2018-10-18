import { Component } from '@angular/core';

import { NgBarnService } from 'ng-barn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barn-source';

  constructor(
    private store: NgBarnService
  ) {
    store.select('users');
    store.set([
      {
        id: 1,
        name: 'Eduard'
      },
      {
        id: 3,
        name: 'Eduard'
      },
      {
        id: 4,
        name: 'Eduard'
      },
      {
        id: 5,
        name: 'Eduard'
      },
    ]);
    store.push({
      id: 2,
      name: 'Andros'
    });
    store.push({
      id: 6,
      name: 'Andros'
    });
    store.push({
      id: 7,
      name: 'Andros'
    });
    store.push({
      id: 8,
      name: 'Andros'
    });
    store.update(1, {
      name: 'Andres'
    });
    store.delete(1);

    console.log(store.get());
  }
}
