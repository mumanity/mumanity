import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogIndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    BlogIndexComponent,
    CreateComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ]
  // ,
  // providers: [
  //   PUT SERVICES IN HERE!
  // ]
})
export class BlogModule { }
