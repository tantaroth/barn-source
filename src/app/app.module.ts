import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgBarnModule } from 'ng-barn';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBarnModule.forRoot({
      store: {
        users: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
