import { Component, OnInit } from '@angular/core';

// Telling Angular that this is a component, meta data, tells angular how you want it to behave
// Able to change name of selector, templateUrl, styleUrls, if change just reflect those changes
@Component({
  selector: 'app-date', // tells angular if someone uses this tag in html, instiate this class
  templateUrl: './date.component.html', // this is html file to use witht his lcass
  styleUrls: ['./date.component.css'] // for styleing in css
})
// Must create a class, functionality will go in the class
export class DateComponent implements OnInit {

  dateMessage: string;

  /*
    - setInterva()
      - is JavaScript API lets you run a function at regular time intervals
      - first agurment is the callback, method going to be used
      - second argument is how often, so for every second 1000 as milliseconds 
  */
  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);
   }

  ngOnInit(): void {
  }

}
