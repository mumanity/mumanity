import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class BlogIndexComponent implements OnInit {
  blogs: Post[];
  post: Post;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.setBlogs();
  }

  setBlogs() {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
  }

  setPost(post: Post): void {
    this.blogService.setPost(post);
  }

}
