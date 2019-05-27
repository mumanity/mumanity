import { BlogIndexComponent } from "./index/index.component";
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';

const routes: Routes = [
//     {
//         path: '',
//         component: BlogIndexComponent
//     },
//     {
//         path: 'details/:id',
//         component: BlogDetailComponent
//     }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class BlogRoutingModule { }