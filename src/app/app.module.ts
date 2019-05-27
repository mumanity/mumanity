import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogIndexComponent } from './blog/index/index.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SiteToDosComponent } from './site-to-dos/site-to-dos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateComponent } from './blog/create/create.component';
import { PostComponent } from './blog/post/post.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    BlogIndexComponent,
    AboutMeComponent,
    SiteToDosComponent,
    WelcomeComponent,
    CreateComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
