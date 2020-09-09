import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // add this here manually

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurtleComponent } from './turtle/turtle.component';
import { DateComponent } from './date/date.component';
import { GetExample1Component } from './get-example1/get-example1.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TurtleComponent,
    DateComponent,
    GetExample1Component // added this here manually
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
