import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(public _http : HttpClient) { }
  baseUrl: string = 'https://api.themoviedb.org/3/movie/550?api_key=4ca02507a4c0122abc7da768a32ea3e6';
  
  getMovie(name) {
    return this._http.get(this.baseUrl);
  }
}
