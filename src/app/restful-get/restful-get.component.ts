import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restful-get',
  templateUrl: './restful-get.component.html',
  styleUrls: ['./restful-get.component.css']
})
export class RestfulGetComponent implements OnInit {

  // declare userName as a string
  userName: string = "";
  // create a member variable that will hold the response in the search()
  response: any;

  constructor(private http: HttpClient) { 
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
