import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import { BarnService } from 'barn';

import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  index: number;
  form: FormGroup;
  list: User[];
  listed: boolean;
  editing: boolean;

  constructor(
    private store: BarnService
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
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });

    this.list = this.store.get();
  }

  reset() {
    this.form.reset();
    this.index = null;
    this.editing = null;
  }

  edit(index: number) {
    this.editing = true;
    this.index = index;

    this.form.patchValue(this.list[index]);
  }

  delete(index: number) {
    if (confirm('Esta seguro de eliminar este registro?')) {
      this.store.delete(index);
      this.reset();
    }
  }

  onSubmitting(event: User[]) {
    this.list = event;
  }
  onSubmitted(event: boolean) {
    if (event) {
      this.reset();
    }
  }

}
