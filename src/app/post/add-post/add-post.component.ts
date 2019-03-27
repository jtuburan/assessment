import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/shared/post.service';
import { UserModel } from 'src/app/shared/user.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() addUser = new EventEmitter<UserModel>();

  constructor(private user: PostService) { }

  profileForm = new FormGroup({
    fullName: new FormControl(null, Validators.required),
    userName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    contact: new FormControl(null, [Validators.required])
  });

  ngOnInit() {
  }
  // onSubmit() {
  //   // this.user.addUser = this.profileForm.value;
  //   // console.warn(this.profileForm.value)
  // }
  onSubmit() {
    this.addUser.emit(this.profileForm.value)
    console.log(this.profileForm.value)
    console.log(this.addUser.emit(this.profileForm.value))
  }

}
