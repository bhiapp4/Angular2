import {Injectable} from '@angular/core';
import {User} from '../user';

@Injectable()
export class LoginService{
    user:User = new User();
    constructor(){

    }

    setUser(username:string){
        this.user = new User();
        this.user.username = username;
    }
}
