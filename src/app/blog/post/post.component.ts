import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private blogservice: BlogService) {}

  ngOnInit() {
    this.post = this.blogservice.getPost();
  }

}
