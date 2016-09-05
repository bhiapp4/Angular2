import {provideRouter,RouterConfig} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BlogComponent} from './blog.component';
import {BlogViewComponent} from './blogview.component';


export const routes:RouterConfig = [
    { path:'login', component:LoginComponent},
    { path:'addBlog', component:BlogComponent },
    { path:'addBlog/:blogId', component:BlogComponent },
    { path:'viewBlog', component:BlogViewComponent},
    { path: '', redirectTo:'/login', pathMatch:'full'}
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]