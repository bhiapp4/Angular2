import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {LoginService} from './login.service';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    template:`
       <h1>Login</h1>
       <form [formGroup]="loginForm" (ngSubmit)="login()" novalidate>
          <div class="form-group">
            <label for="userName">User name</label>
            <input type="text" id="userName" class="form-control" [formControl]="loginForm.controls['user_name']" #uname="ngForm">
            <div class="alert alert-danger" *ngIf="uname.touched && uname.errors?.required">
               User name is a required field
            </div>
          </div>
          <button type="submit" class="btn btn-primary" [disabled]="!loginForm.valid">Login</button>
       </form>
    `,
    directives:[REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES ],
    providers:[FormBuilder]
})
export class LoginComponent{
    loginForm:FormGroup;
    constructor(fb:FormBuilder,private _loginService:LoginService, private _router:Router){
        this.loginForm = fb.group({
            'user_name':['',Validators.required]
        });
    }

    login(){
        console.log(this.loginForm.value);
        this._loginService.setUser(this.loginForm.value.user_name);
        this._router.navigate(['/viewBlog']);
    }
}