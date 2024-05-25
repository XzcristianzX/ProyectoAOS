import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ErrorComponent } from './pages/error/error.component';
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home2/:id',
        component: HomeComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    {
        path: 'producto',
        loadComponent: ()=> import("./pages/producto/producto.component")
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
