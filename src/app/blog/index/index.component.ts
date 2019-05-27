import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BLOGS } from '../mock.blogs';

@Component({
  selector: 'app-blog-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
  
export class BlogIndexComponent implements OnInit {

  posts: Array<Blog> = BLOGS;
  
  constructor() { }

  ngOnInit() {
  }

  select(post) {
    console.log('post', post);
  }

}
