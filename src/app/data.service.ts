import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get('https://next.json-generator.com/api/json/get/NJ99RxwBO');
  }
}