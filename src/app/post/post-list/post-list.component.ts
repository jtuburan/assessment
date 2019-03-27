import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/user.model';
import { PostService } from 'src/app/shared/post.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  userList: UserModel[];

  constructor(private users: PostService, private router: Router) { }

  ngOnInit() {
     this.users.getUsers()
       .subscribe(data => this.userList = data )
    //this.users = this.users.getUsers();
  }
  onSelect(user){
      this.router.navigate(['/post', user.id]);
  }
  addTolist($event){
    console.log($event);
  }

}
