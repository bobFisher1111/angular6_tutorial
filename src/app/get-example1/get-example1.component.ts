import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // add this

@Component({
  selector: 'app-get-example1',
  templateUrl: './get-example1.component.html',
  styleUrls: ['./get-example1.component.css']
})
export class GetExample1Component implements OnInit {

  // endpoint
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: any;

  // added HttpClient to the constructor
  constructor(private http: HttpClient) { }

  getPosts(){
    // returns an observable respsonse from api
    this.posts = this.http.get(this.ROOT_URL + '/posts')
  }

  ngOnInit(): void {
  }
  
}
