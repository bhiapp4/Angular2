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
var blog_service_1 = require('./blog.service');
var login_service_1 = require('./login/login.service');
var angular2_grid_1 = require('angular2-grid');
var forms_1 = require('@angular/forms');
var BlogViewComponent = (function () {
    function BlogViewComponent(_blogService, fb, _loginService) {
        this._blogService = _blogService;
        this._loginService = _loginService;
        this.blogs = null;
        this.searchForm = fb.group({
            'search': ['', forms_1.Validators.required]
        });
    }
    BlogViewComponent.prototype.setShowFlag = function (blog) {
        blog.show = !blog.show;
    };
    BlogViewComponent.prototype.search = function () {
        this.blogs = this._blogService.getBlogsBySearch(this.searchForm.value.search);
    };
    BlogViewComponent.prototype.ngOnInit = function () {
        this.user = this._loginService.user;
        this.user.blogCount = 0;
        this.blogs = this._blogService.getBlogs();
        console.log(this.blogs);
        console.log(this.user);
        for (var i = 0; i < this.blogs.length; i++) {
            console.log(this.blogs[i].user);
            if (this.blogs[i].user.username === this.user.username) {
                this.user.blogCount = this.user.blogCount + 1;
            }
        }
    };
    BlogViewComponent.prototype.showAll = function () {
        this.searchForm.reset();
        this.blogs = this._blogService.getBlogs();
    };
    BlogViewComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/viewBlogs.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, angular2_grid_1.NgGrid, angular2_grid_1.NgGridItem],
            providers: [forms_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService, forms_1.FormBuilder, login_service_1.LoginService])
    ], BlogViewComponent);
    return BlogViewComponent;
}());
exports.BlogViewComponent = BlogViewComponent;
//# sourceMappingURL=blogview.component.js.map