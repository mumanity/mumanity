import { Component, OnInit, NgModule } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BlogService } from '../blog.service';
import { Post } from '../post/post';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
  public Editor = ClassicEditor;
  public ckPost = {
    editorData: ''
  }
  createdTitle: string;
  editorData: any;

  
  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  createPost(): void {
    // id will be handled in DB
    // date might be too
    let creation: Post = {
      id: 11,
      title: this.createdTitle,
      content: this.ckPost.editorData,
      img: '', 
      createdDate: new Date()
    }
    this.blogService.createPost(creation);
    this.ckPost = null;
  }

}
