import { Component, OnInit } from '@angular/core';
import { UserformService } from '../userform.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  input = {
    firstName: '',
    lastName: '',
    email:'',
    password:''
  }
  data;
  name: string = '';
  constructor(public _userform: UserformService) { }
  
  onClick(){
    this._userform.getContent(this.input)
      .subscribe(
        (response) => {
          this.data = response
          console.log(this.data)
        })
        
  }

  ngOnInit() {}
  
  // register(){
  // return this.userService.register(this.user)
  //   .subscribe((response:any) => {
  //   window.sessionStorage.setItem('token', response.token);
  //   window.sessionStorages.setItem('userId', response.userId);
  //   this.router.navigateByUrl('/home');
  // }
}