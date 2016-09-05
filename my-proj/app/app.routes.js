"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var blog_component_1 = require('./blog.component');
var blogview_component_1 = require('./blogview.component');
exports.routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'addBlog', component: blog_component_1.BlogComponent },
    { path: 'addBlog/:blogId', component: blog_component_1.BlogComponent },
    { path: 'viewBlog', component: blogview_component_1.BlogViewComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map