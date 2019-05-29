import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BlogIndexComponent } from './index/index.component';
// import { CreateComponent } from './create/create.component';
// import { PostComponent } from './post/post.component';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    // BlogIndexComponent,ng ser
    // CreateComponent,
    // PostComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
