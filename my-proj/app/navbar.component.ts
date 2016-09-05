import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    selector:'nav-bar',
    templateUrl:'app/navbar.html',
    directives:[ROUTER_DIRECTIVES]
})
export class NavbarComponent{

    constructor(private _router:Router){

    }

}