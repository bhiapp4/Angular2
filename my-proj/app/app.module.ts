import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {APP_BASE_HREF} from '@angular/common';
import {BlogService} from './blog.service';
import { ImageUploadModule } from 'ng2-imageupload';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [ BrowserModule, ImageUploadModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers:[ APP_ROUTER_PROVIDERS, BlogService, LoginService ]
})
export class AppModule { }
