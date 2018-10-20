import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreService } from './store.service';

import { NgBarnComponent } from './ng-barn.component';
import { NgBarnFormComponent } from './components/ng-barn-form/ng-barn-form.component';

import { Config } from './models/config';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  declarations: [NgBarnComponent, NgBarnFormComponent],
  exports: [NgBarnComponent, NgBarnFormComponent]
})
export class NgBarnModule {
  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: NgBarnModule,
      providers: [StoreService, { provide: 'config', useValue: config }]
    };
  }
}
