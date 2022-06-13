import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ClassePrincipale } from '../classe-principale';
import { Iposts } from '../interface';
import { ServicePostService } from '../service-post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  constructor(private updatePost: ServicePostService, private aR: ActivatedRoute) { }
  // updatePosts:Iposts[]=[]
  updatePosto:Iposts|undefined;
  idUpdate!:number;

  visualizzaPosts(id:number){
    this.idUpdate = id
    this.updatePost.getPost(this.idUpdate).subscribe(res=> console.log(res))
  }
  ngOnInit(): void {
    this.aR.params.subscribe(
      async (parametri)=>{
        const id = +parametri["id"]
       
        this.updatePosto = await this.updatePost.getPost(id).toPromise()
        
        
      }

     
    )
}
  id!:number;
  title!:string;
  body!:string;
  aggiornaPost(post:Iposts, id:number){
    let x = new ClassePrincipale(post.userId, post.id, post.title, post.body)
    this.updatePost.updatePost(x, id).subscribe((res:Iposts)=>{console.log(res);
    })

  }

}
