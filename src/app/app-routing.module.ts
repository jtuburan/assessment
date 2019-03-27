import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './users/add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: AddUserComponent },
  { path: 'post', component:  PostComponent},
  { path: 'post/:id', component: PostDetailComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
