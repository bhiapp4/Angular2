import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {BlogService} from './blog.service';
import {LoginService} from './login/login.service';
import {Router, ActivatedRoute} from '@angular/router';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
    templateUrl:'app/addBlog.html',
    providers:[FormBuilder]
})
export class BlogComponent implements OnInit{
   blogForm:FormGroup;
   label:string = "Add New Blog"
   resizeOptions: ResizeOptions = {
        resizeMaxHeight: 128,
        resizeMaxWidth: 128
   };

    refResizeOptions: ResizeOptions = {
        resizeMaxHeight: 64,
        resizeMaxWidth: 64
    };

    constructor(fb:FormBuilder,private _blogService:BlogService, private _router:Router, 
        private _loginService:LoginService, private _activatedRoute:ActivatedRoute){
        this.blogForm = fb.group({
            'message':[''],
            'subject':[''],
            'image':['']
        })
   }

 
    selected(imageResult: ImageResult) {
        this.blogForm.value.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }

   addBlog(){
       var blogId = this._activatedRoute.snapshot.params['blogId'];
       if(blogId !== undefined){
           this._blogService.setBlogRef(this.blogForm.value,blogId);
       }else{
           this._blogService.saveBlog(this.blogForm.value);
           this._loginService.user.blogCount = this._loginService.user.blogCount + 1;        
       }       
       this._router.navigate(['/viewBlog']);
   }

   getResizeOptions(){
       let blogId = this._activatedRoute.snapshot.params['blogId'];
       if(blogId !== undefined){
         return this.refResizeOptions;
       }else{
           return this.resizeOptions;
       }
   }

   ngOnInit(){
        let blogId = this._activatedRoute.snapshot.params['blogId'];
         if(blogId !== undefined){
             this.label = "Add Ref Blog";
         }
   }

 }