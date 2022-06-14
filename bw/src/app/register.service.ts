import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  ApiUrlUser:string = 'http://localhost:4201/users'
  ApiUrlGetUser:string = 'http://localhost:4201/'
  
  register(user:Partial<IUser>){
    return this.http.post(this.ApiUrlUser, user)
  }
  getUser(id:number){
    return this.http.get(`${this.ApiUrlGetUser}${id}`)
  }
}

