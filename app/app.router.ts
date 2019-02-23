import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const router: Routes = [
    { path: '',  component: NaviComponent },
    { path: 'navi', component: NaviComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);