import {Injectable} from '@angular/core';
import {Blog} from './blog';
import {LoginService} from './login/login.service'

@Injectable()
export class BlogService{
   private _blogs:Blog[];

   constructor(private _loginService:LoginService){
     this._blogs = [];
   }

   saveBlog(blog:Blog){
     var newBlog = this.createNewBlog(blog);
     newBlog.blogId = this._blogs.length + 1;
     this._blogs.push(newBlog);
     console.log(this._blogs);
   }

   createNewBlog(blog:Blog){
     var newBlog = new Blog();
     newBlog.image = blog.image;
     newBlog.message = blog.message;
     newBlog.subject = blog.subject;
     newBlog.user = this._loginService.user;
     return newBlog;
   }

   setBlogRef(blog:Blog,blogId:number){
     console.log(blogId);
     for(var i=0; i<this._blogs.length;i++){
       if(this._blogs[i].blogId == blogId){
         console.log("setting blog reference");
         this._blogs[i].blogRef = this.createNewBlog(blog);
       }
     }
   }

   getBlogs(){
     return this._blogs;
   }

   getBlogsBySearch(searchVal:string){
     let blogsArr = new Array<Blog>();
     for(var i=0; i<this._blogs.length;i++){
       if(this._blogs[i].subject === searchVal || this._blogs[i].user.username === searchVal){
         blogsArr.push(this._blogs[i]);
       }
     }
     return blogsArr;
   }

}