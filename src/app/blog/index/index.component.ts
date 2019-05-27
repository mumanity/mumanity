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
    this.getBlogs();
  }

  ngOnInit() {
  }

  getBlogs(): void {
    // this.blogs = this.blogService.getBlogs();
    this.blogs = BLOGS;
  }

  getPost() { }

  setPost(post: Post): void {
    this.blogService.setPost(post);
  }

  createPost() { }

  deletePost() { }

}
