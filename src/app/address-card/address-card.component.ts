import { Component, OnInit, Input } from '@angular/core';
import { User} from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  /*
    -  passing variable:
  */
  //user: any;
  // this will hold the value that will be passed in from app.component.html, using @Input annotation
  //@Input('name') userName: string; // must specify in the Input property passing in from, decalring it with @Input

  // passing class: object
  @Input('user') user: User;
   // Used for click events:
   isColapsed : boolean = true; // set for true to start off as collapsed

    // Create a function for the button for click event
 

  constructor() {}
  
  toggleCollapse(){
    this.isColapsed = !this.isColapsed;
  }

  ngOnInit() {
    /*
    // this is for the variable passing, not for object passing
    this.user = {
      name: this.userName,
      title: 'Fisherman',
      address: '1616 Fuqua Dr, Flower Mound, Tx 75028',
      // Loop through this part in the html file with ngFor
      phone: [
        '972-355-8645',
        '111-111-1111'
     ]
    };
    { */
  }

}
