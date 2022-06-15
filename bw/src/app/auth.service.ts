import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ApiUrlUser:string = 'http://localhost:4201/login'
  constructor(private http: HttpClient) { }

  login(user:Partial<IUser>){
    return this.http.post(this.ApiUrlUser, user)
  }
  saveUser(t:string){
    localStorage.setItem("token", t)
  }
  isUserLoggedIn(){
    return localStorage.getItem("token") != null
  }
  logout():boolean{
    localStorage.removeItem("token")
    return true
  }
  // loginSub = new BehaviorSubject(null);

  // loginObs = this.loginSub

  // verificaLogin(user:Partial<IUser>){
  //   return this.http.post(this.ApiUrlUser, user).pipe(tap(res=>{this.loginSub.next(res)}))
  // }
}
