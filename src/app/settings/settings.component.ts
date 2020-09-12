import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // adding for dynamic sub tabs for setting
  routes = [
    { linkName: 'Profile', url: 'profile'},
    { linkName: 'Contact', url: 'contact'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
