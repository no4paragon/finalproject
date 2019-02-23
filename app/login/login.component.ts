import { Component, OnInit } from '@angular/core';
import { UserformService } from '../userform.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input = {
    email:'',
    password:''
  }
  data;
  constructor(public _userform: UserformService) { }

  ngOnInit() {}

  onClick(){
    this._userform.getContent(this.input)
      .subscribe(
        (response) => {
          this.data = response
          console.log(this.data)
        })
}
}