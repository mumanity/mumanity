import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogIndexComponent } from './blog/index/index.component';
import { SiteToDosComponent } from './site-to-dos/site-to-dos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostComponent } from './blog/post/post.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogIndexComponent },
  { path: 'to-do', component: SiteToDosComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'post/:id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
