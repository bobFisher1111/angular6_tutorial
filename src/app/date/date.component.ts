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

  constructor() { }

  ngOnInit(): void {
  }

}
