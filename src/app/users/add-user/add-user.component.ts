import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/shared/post.service';
import { UserModel } from 'src/app/shared/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

 

  profileForm = new FormGroup({
    fullName: new FormControl(null, Validators.required),
    userName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email])
  });

 
  constructor(private user: PostService) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.user.addUser = this.profileForm.value;
    console.warn(this.profileForm.value)
  }


}
