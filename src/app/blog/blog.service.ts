import { Injectable } from '@angular/core';
import { Post } from './post/post';
import { BLOGS } from './mock.blogs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class BlogService {
  post: Post;

  constructor() { }

  getBlogs(): Observable<Post[]> {
    return of(BLOGS);
  }

  setPost(post): void {
    this.post = post;
   }

  getPost(id): Post { 
    BLOGS.forEach((blog) => {
      if (blog.id === Number(id)) {
        this.post = blog;
        return;
      } 
    })
    return this.post;
  }

  createPost(post): void {
    BLOGS.push(post);
  }

}
