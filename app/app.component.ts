import { Component } from '@angular/core';
import { UserformService } from './userform.service';
import { SearchService } from './search.service';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-project';
  input = {
    firstName: '',
    lastName: '',
    email:'',
    password:''
  }
  data;
  name: string = '';
  constructor(public _userform: UserformService, public _serach: SearchService) { }
  
  onClick(){
    this._userform.getContent(this.input)
      .subscribe(
        (response) => {
          this.data = response
          console.log(this.data)
        })
        
}
  
  search(){
    console.log(this.name)
    this._serach.getMovie(this.name)
      .subscribe(
        (response:any) => {
          this.data = response
          console.log(this.data)
        })
}
}