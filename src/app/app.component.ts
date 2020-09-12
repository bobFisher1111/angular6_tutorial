import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { ServiceOneService } from './service-one.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Turtle Page';
  user: User;

  // used for naviagation for routing for variable:
  contactRoute = "settings/contact"

  // dynamic way of looping through for links for naviagation for routing, preffered way:
  routes = [
    { linkName: 'Home', url: 'home'},
    { linkName: 'settings', url: 'settings'},
  ]

   // So when need an instance it passes it to svc and gives it to us
  constructor(private svc: ServiceOneService, private http: HttpClient){
    // Hard coded values:
    this.user = new User();
    this.user.name =  "Turtle Warrior";
    this.user.designation = "Software Engineer";
    this.user.address = "1616 Fuqua Drive Flower Mound TX 75028";
    this.user.phone = [
      '972-355-8645',
      '111-222-3333'
    ];

    // use instance
    this.svc.printToConsole("Got The Service!!!!!!!!!!"); // check and see it in the console in the inspect on web browser 
  }

  // Using REST with HttpClient
  ngOnInit(){
    // create a variable called obs for obseravble 
    let obs = this.http.get('http://api.github.com/users/koushikkothagal')
    // calling method on it called susbscribe and print to console.log
    // then pass what it got to variable called response inside subscribe
    obs.subscribe((response) => console.log(response)); // prints json in the console
  }
}
