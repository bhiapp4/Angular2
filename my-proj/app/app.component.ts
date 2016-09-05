import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavbarComponent} from './navbar.component'

@Component({
    selector: 'my-app',
    template: `
    <nav-bar></nav-bar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    directives:[ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent { 

}
