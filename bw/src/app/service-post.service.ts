import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iposts } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {
  
  constructor(private http : HttpClient ) { }

  ApiUrlPost:string = 'http://localhost:4201/posts'
  
  getPosts(){
    return this.http.get<Iposts[]>(this.ApiUrlPost)
  }

  getPost(id:number){
    return this.http.get<Iposts>(`${this.ApiUrlPost}/${id}`)
  }


  createNewPost(post:Iposts):any{
    return this.http.post(this.ApiUrlPost, post)
  }

  updatePost(post:Iposts, id:number):any{
    return this.http.patch(`${this.ApiUrlPost}/${id}`, post)
  }
  
  removePost(id:number):any{
    return this.http.delete(`${this.ApiUrlPost}/${id}`)
  }
  
}
