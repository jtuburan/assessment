import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { UserModel } from 'src/app/shared/user.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList = [];
  public user$: Observable<UserModel[]>
    
  constructor(private users: PostService) { }

  ngOnInit() {
    this.users.getUsers()
      .subscribe(data => this.userList = data )
  }

}
