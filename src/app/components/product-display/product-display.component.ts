import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpService } from "../../data.service"

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
  users: any;
  constructor(private apiCall: HttpService, private httpClient: HttpClient) {
    this.apiCall.getUsers().subscribe(users => {
      console.log('users', users);
      this.users = users;
    });
  }
}