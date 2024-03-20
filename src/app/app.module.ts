import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigimonesJrmbComponent } from './digimones-jrmb/digimones-jrmb.component';
import { DigimonesServices } from './digimones-jrmb/digimones.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DigimonesJrmbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DigimonesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
