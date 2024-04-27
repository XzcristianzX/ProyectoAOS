import { Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductoDetailComponent } from './pages/producto-detail/producto-detail.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'producto/:id',
        component: ProductoDetailComponent
    },
    {
        path:'producto',
        component: ProductoComponent
    },
    {
        path: 'chat', 
        loadComponent: ()=> import("./pages/chat/chat.component").then(m => m.ChatComponent)
    },
    {
        path:'**',
        component: ErrorComponent,
    }
];
