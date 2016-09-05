import {Component, OnInit} from '@angular/core';
import {Blog} from './blog';
import {User} from './user';
import {BlogService} from './blog.service';
import {LoginService} from './login/login.service';
import { NgGrid, NgGridItem } from 'angular2-grid';
import {FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

@Component({
    templateUrl:'app/viewBlogs.html',
    directives: [REACTIVE_FORM_DIRECTIVES,NgGrid, NgGridItem],
    providers:[FormBuilder]
})
export class BlogViewComponent implements OnInit{

    blogs:Blog[] = null;
    searchForm:FormGroup;
    user:User;

    setShowFlag(blog: Blog){
       blog.show = !blog.show;
    }

    constructor(private _blogService:BlogService,fb:FormBuilder, private _loginService:LoginService){       
        this.searchForm = fb.group({
            'search':['', Validators.required]
        })      
    }

    search(){
       this.blogs = this._blogService.getBlogsBySearch(this.searchForm.value.search);
   }

    ngOnInit(){
        this.user = this._loginService.user;
        this.user.blogCount = 0;
        this.blogs = this._blogService.getBlogs();
        console.log(this.blogs)
        
        console.log(this.user);
       for(var i=0; i<this.blogs.length; i++){
           console.log(this.blogs[i].user);
           if(this.blogs[i].user.username === this.user.username){
                this.user.blogCount = this.user.blogCount + 1;
           }
       }
    }

    showAll(){
        this.searchForm.reset();
        this.blogs = this._blogService.getBlogs();
    }

}