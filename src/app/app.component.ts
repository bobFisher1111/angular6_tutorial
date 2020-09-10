import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Turtle Page';
  user: User;
  constructor(){
    // Hard coded values:
    this.user = new User();
    this.user.name =  "Turtle Warrior";
    this.user.designation = "Software Engineer";
    this.user.address = "1616 Fuqua Drive Flower Mound TX 75028";
    this.user.phone = [
      '972-355-8645',
      '111-222-3333'
    ];
  }

  // Calling the service printToConsole() with dependency injection
  
}
