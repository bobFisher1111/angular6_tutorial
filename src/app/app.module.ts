import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // add this here manually

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurtleComponent } from './turtle/turtle.component';
import { DateComponent } from './date/date.component';
import { GetExample1Component } from './get-example1/get-example1.component';
import { AddressCardComponent } from './address-card/address-card.component'; 
import { ViewModuleModule } from './view-module/view-module.module';
import { ServiceOneService } from './service-one.service';

@NgModule({
  declarations: [
    AppComponent,
    TurtleComponent,
    DateComponent,
    GetExample1Component,
    AddressCardComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ViewModuleModule
  ],
  providers: [
    ServiceOneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
