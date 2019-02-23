import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const router: Routes = [
    { path: '',  component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'navi', component: NaviComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);