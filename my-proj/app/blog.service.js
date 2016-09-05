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
var blog_1 = require('./blog');
var login_service_1 = require('./login/login.service');
var BlogService = (function () {
    function BlogService(_loginService) {
        this._loginService = _loginService;
        this._blogs = [];
    }
    BlogService.prototype.saveBlog = function (blog) {
        var newBlog = this.createNewBlog(blog);
        newBlog.blogId = this._blogs.length + 1;
        this._blogs.push(newBlog);
        console.log(this._blogs);
    };
    BlogService.prototype.createNewBlog = function (blog) {
        var newBlog = new blog_1.Blog();
        newBlog.image = blog.image;
        newBlog.message = blog.message;
        newBlog.subject = blog.subject;
        newBlog.user = this._loginService.user;
        return newBlog;
    };
    BlogService.prototype.setBlogRef = function (blog, blogId) {
        console.log(blogId);
        for (var i = 0; i < this._blogs.length; i++) {
            if (this._blogs[i].blogId == blogId) {
                console.log("setting blog reference");
                this._blogs[i].blogRef = this.createNewBlog(blog);
            }
        }
    };
    BlogService.prototype.getBlogs = function () {
        return this._blogs;
    };
    BlogService.prototype.getBlogsBySearch = function (searchVal) {
        var blogsArr = new Array();
        for (var i = 0; i < this._blogs.length; i++) {
            if (this._blogs[i].subject === searchVal || this._blogs[i].user.username === searchVal) {
                blogsArr.push(this._blogs[i]);
            }
        }
        return blogsArr;
    };
    BlogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map