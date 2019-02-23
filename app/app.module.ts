import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserformService } from './userform.service';
import { SearchService } from './search.service';
import { NaviComponent } from './navi/navi.component';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [
    UserformService, 
    SearchService
    ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
