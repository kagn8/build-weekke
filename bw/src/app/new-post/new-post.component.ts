import { Component, OnInit } from '@angular/core';
import { ClassePrincipale } from '../classe-principale';
import { Iposts } from '../interface';

import { ServicePostService } from '../service-post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private newPost: ServicePostService ) { }
  ngOnInit(): void {
  }

  title:string="";
  body:string="";

  newPosts:Iposts[]= []

  creaNuovo(){
    let nuovo = new ClassePrincipale(0,0, this.title, this.body)
    this.newPosts.push(nuovo)
    console.log(this.newPosts);
    this.newPost.createNewPost(nuovo).subscribe((res: any)=>{console.log(res)})
    
  }
  
  
}
