
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Iposts } from '../interface';
import { ServicePostService } from '../service-post.service';

@Component({
  selector: 'app-home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.scss']
})
export class HomePostComponent implements OnInit {

  constructor(private Posts: ServicePostService, private auth:AuthService, private route:Router) { }
  posts:Iposts[]=[]

  visualizzaPosts(){
    this.Posts.getPosts().subscribe(res => {this.posts=res})
    // setTimeout(this.Posts.getPosts().subscribe(res => {this.posts=res}),2000)
  }

  ngOnInit(): void {
    this.visualizzaPosts()
  }
  cancellaPost(id:number){
     console.log(id);
    
     this.Posts.removePost(id).subscribe((res:Iposts) => {console.log(res);this.visualizzaPosts()})
    //  setTimeout(()=>this.visualizzaPosts(),2000)
      // this.visualizzaPosts()
  }
  
  slogga(){
    this.auth.logout()
    this.route.navigate(['/login'])
  }

}

