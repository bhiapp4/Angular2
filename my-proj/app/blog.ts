import {User} from './user.ts';

export class Blog{
    blogId:number;
    message:string;
    subject:string;
    image:string;
    blogRef:Blog = null;
    show:boolean = false;
    user:User = null;
}