import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {
  // this method will be called inside the component.ts class
  printToConsole(arg){
    console.log(arg);
  }
  constructor() { }
}
