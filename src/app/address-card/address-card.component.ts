import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  constructor() { 

    this.user = {
      name: 'Bob',
      title: 'Fisherman',
      address: '1616 Fuqua Dr, Flower Mound, Tx 75028',
      // Loop through this part in the html file with ngFor
      phone: [
        '972-355-8645',
        '111-111-1111'
      ]
    };
  }

  ngOnInit(): void {
  }

}
