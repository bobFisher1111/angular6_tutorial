import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from 'src/app/service-one.service';

@Component({
  selector: 'app-view-module-component',
  templateUrl: './view-module-component.component.html',
  styleUrls: ['./view-module-component.component.css']
})
export class ViewModuleComponentComponent implements OnInit {

  constructor(private svc: ServiceOneService) { 
    svc.printToConsole("Welcome to the inner Service"); // printing to the inspect console on the browser
  }
  
  ngOnInit(): void {
  }

}
