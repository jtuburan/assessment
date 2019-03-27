import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    HeaderComponent,
    HomeComponent,
    AddPostComponent,
    PostListComponent,
    PageNotFoundComponent,
    PostDetailComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
