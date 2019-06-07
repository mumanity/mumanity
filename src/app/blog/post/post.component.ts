import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from './post';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(
    private blogservice: BlogService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.setPost();
    let id = this.route.snapshot.paramMap.get('id');
    this.post = this.blogservice.getPost(id);
    // this.post$ = this.route.paramMap.pipe(
    //   .switchMap((params: ParamMap) => 
    //     this.blogservice.getPost(params.get('id'))
    // )
  }

  // setPost(): void {
  //   this.post = this.blogservice.getPost()
  // }
}
