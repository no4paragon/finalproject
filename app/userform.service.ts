import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserformService { 
  constructor(public _http : HttpClient) { }
  baseUrl: string = 'http://mean-2019-1-yuta-phortonssf.c9users.io:8080/api/appUsers';
  
  getContent(name) {
    return this._http.post(this.baseUrl, name );
  }
}
