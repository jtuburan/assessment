import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  

  configUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.http.get<UserModel[]>(this.configUrl) 
  }
  
  addUser(user: UserModel) {
    return this.http.post<UserModel[]>(this.configUrl, user,httpOptions).subscribe(
      data => {
        
        console.log("Success",data)
      }
    )
  } 
}
