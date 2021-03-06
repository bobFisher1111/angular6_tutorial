import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from 'src/app/service-one.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-module-component',
  templateUrl: './view-module-component.component.html',
  styleUrls: ['./view-module-component.component.css']
})
export class ViewModuleComponentComponent implements OnInit {

  // declare userName as a string
  userName: string = "";
  // create a member variable that will hold the response in the search()
  response: any;

  constructor(private svc: ServiceOneService, private http: HttpClient) { 
    svc.printToConsole("Welcome to the inner Service"); // printing to the inspect console on the browser
  }
  
  ngOnInit(): void {
  }

  search(){
    this.http.get('http://api.github.com/users/' + this.userName)
    // use this once done, call this function, same as calling it a variable and then variableName.susbcribe(), this works both ways
    // lambda expression
    .subscribe((response)=> {
      this.response = response; // 
      console.log(this.response); // logging it to the console
    })
  }

}
