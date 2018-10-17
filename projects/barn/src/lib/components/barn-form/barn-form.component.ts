import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BarnService } from '../../barn.service';

import { Config } from '../../models/config';

@Component({
  selector: 'tnt-barn-form',
  templateUrl: './barn-form.component.html',
  styleUrls: ['./barn-form.component.css']
})
export class BarnFormComponent implements OnInit {

  private saved: boolean;
  private editing: boolean;

  @Input() index: number;
  @Input() formGroup: FormGroup;
  @Input() guardSave: boolean;

  @Output() submitting: EventEmitter<any[]> = new EventEmitter();
  @Output() submitted: EventEmitter<boolean> = new EventEmitter();

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event) {
      if (this.guardSave) {
          if (this.editing && !this.saved) {
              event.returnValue = true;
          }
      }
  }
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
      if (this.guardSave) {
          const target: any = event.target;
          if (
              target.tagName === 'INPUT' ||
              target.tagName === 'TEXTAREA'
          ) {
              this.editing = true;
              this.saved = undefined;
          }
      }
  }

  constructor(
      private store: BarnService
  ) {
      const config: Config = store.hot();

      store.select(config.key);
  }

  ngOnInit() {
  }

  onSubmit(index) {
      this.submitted.emit(false);

      if (this.formGroup.valid) {
          let response: object[] = [];

          if (typeof index === 'number') {
              response = this.store.update(index, this.formGroup.value);
          } else {
              response = this.store.push(this.formGroup.value);
          }

          this.submitting.emit(response);
          this.submitted.emit(true);
          this.saved = true;
          this.editing = undefined;
      }
  }

}
