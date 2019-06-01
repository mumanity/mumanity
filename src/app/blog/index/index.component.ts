import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { BlogService } from '../blog.service';
import { BLOGS } from '../mock.blogs';

@Component({
  selector: 'app-blog-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class BlogIndexComponent implements OnInit {
  blogs: Array<Post>;
  post: Post;

  // posts: Array<Post> = BLOGS;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    // this.blogs = this.blogService.getBlogs();
    this.blogs = BLOGS.sort((a, b) => {
      return b.createdDate.getTime() - a.createdDate.getTime();
    });
  }

  getPost() { }

  setPost(post: Post): void {
    this.blogService.setPost(post);
  }

  createPost() { }

  deletePost() { }

}
