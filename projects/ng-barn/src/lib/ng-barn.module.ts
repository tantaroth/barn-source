import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgBarnService } from './ng-barn.service';
import { RequestService } from './request.service';

import { NgBarnComponent } from './ng-barn.component';
import { NgBarnFormComponent } from './components/ng-barn-form/ng-barn-form.component';

import { Config } from './models/config';

@NgModule({
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
  declarations: [NgBarnComponent, NgBarnFormComponent],
  exports: [NgBarnComponent, NgBarnFormComponent]
})
export class NgBarnModule {
  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: NgBarnModule,
      providers: [NgBarnService, RequestService, { provide: 'config', useValue: config }]
    };
  }
}
