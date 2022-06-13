
import { Component, OnInit } from '@angular/core';
import { Iposts } from '../interface';
import { ServicePostService } from '../service-post.service';

@Component({
  selector: 'app-home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.scss']
})
export class HomePostComponent implements OnInit {

  constructor(private Posts: ServicePostService) { }
  posts:Iposts[]=[]

  visualizzaPosts(){
    this.Posts.getPosts().subscribe(res => {this.posts=res})
    // setTimeout(this.Posts.getPosts().subscribe(res => {this.posts=res}),2000)
  }

  ngOnInit(): void {
    this.visualizzaPosts()
  }
  cancellaPost(id:number){
    // console.log(id);
    
    this.Posts.removePost(id).subscribe((res:Iposts) => {console.log(res);
     res})
      setTimeout(()=>this.visualizzaPosts(),2000)
  }
  aggiornaPost(id:number){
    this.destinazione = `http://localhost:4201/posts/${id}`
  }
  destinazione:string=""
}

