import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // add this here manually, will not auto complete

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurtleComponent } from './turtle/turtle.component';
import { DateComponent } from './date/date.component';
import { GetExample1Component } from './get-example1/get-example1.component';
import { AddressCardComponent } from './address-card/address-card.component'; 
import { ViewModuleModule } from './view-module/view-module.module';
import { ServiceOneService } from './service-one.service';
import { RestfulGetComponent } from './restful-get/restful-get.component'; // added this by when addeding SericeOneService to provdiers asked to import it, if not add it then
import { FormsModule } from '@angular/forms'; // added this for restfulGet component created

@NgModule({
  declarations: [
    AppComponent,
    TurtleComponent,
    DateComponent,
    GetExample1Component,
    AddressCardComponent,
    RestfulGetComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // added this manually 
    ViewModuleModule,
    FormsModule // added this for restfulGet component created
  ],
  providers: [
    ServiceOneService // added this manually, its a service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
