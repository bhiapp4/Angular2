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
var blog_service_1 = require('./blog.service');
var login_service_1 = require('./login/login.service');
var router_1 = require('@angular/router');
var BlogComponent = (function () {
    function BlogComponent(fb, _blogService, _router, _loginService, _activatedRoute) {
        this._blogService = _blogService;
        this._router = _router;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this.label = "Add New Blog";
        this.resizeOptions = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
        this.refResizeOptions = {
            resizeMaxHeight: 64,
            resizeMaxWidth: 64
        };
        this.blogForm = fb.group({
            'message': [''],
            'subject': [''],
            'image': ['']
        });
    }
    BlogComponent.prototype.selected = function (imageResult) {
        this.blogForm.value.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    BlogComponent.prototype.addBlog = function () {
        var blogId = this._activatedRoute.snapshot.params['blogId'];
        if (blogId !== undefined) {
            this._blogService.setBlogRef(this.blogForm.value, blogId);
        }
        else {
            this._blogService.saveBlog(this.blogForm.value);
            this._loginService.user.blogCount = this._loginService.user.blogCount + 1;
        }
        this._router.navigate(['/viewBlog']);
    };
    BlogComponent.prototype.getResizeOptions = function () {
        var blogId = this._activatedRoute.snapshot.params['blogId'];
        if (blogId !== undefined) {
            return this.refResizeOptions;
        }
        else {
            return this.resizeOptions;
        }
    };
    BlogComponent.prototype.ngOnInit = function () {
        var blogId = this._activatedRoute.snapshot.params['blogId'];
        if (blogId !== undefined) {
            this.label = "Add Ref Blog";
        }
    };
    BlogComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/addBlog.html',
            providers: [forms_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, blog_service_1.BlogService, router_1.Router, login_service_1.LoginService, router_1.ActivatedRoute])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map