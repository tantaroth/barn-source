import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgBarnModule } from "../../projects/ng-barn/src/public_api";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
export class AppModule {}
