import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BarnService } from './barn.service';

import { BarnComponent } from './barn.component';

import { Config } from './models/config';
import { BarnFormComponent } from './components/barn-form/barn-form.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BarnComponent, BarnFormComponent],
  exports: [BarnComponent, BarnFormComponent]
})
export class BarnModule {
  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: BarnModule,
      providers: [BarnService, { provide: 'config', useValue: config }]
    };
  }
}
