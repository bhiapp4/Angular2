"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var login_service_1 = require('./login.service');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(fb, _loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        this.loginForm = fb.group({
            'user_name': ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.login = function () {
        console.log(this.loginForm.value);
        this._loginService.setUser(this.loginForm.value.user_name);
        this._router.navigate(['/viewBlog']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: "\n       <h1>Login</h1>\n       <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"userName\">User name</label>\n            <input type=\"text\" id=\"userName\" class=\"form-control\" [formControl]=\"loginForm.controls['user_name']\" #uname=\"ngForm\">\n            <div class=\"alert alert-danger\" *ngIf=\"uname.touched && uname.errors?.required\">\n               User name is a required field\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Login</button>\n       </form>\n    ",
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            providers: [forms_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map