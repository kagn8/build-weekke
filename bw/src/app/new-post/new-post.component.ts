import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClassePrincipale } from '../classe-principale';
import { Iposts } from '../interface';

import { ServicePostService } from '../service-post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private newPost: ServicePostService, private forms:FormBuilder) { }
  ngOnInit(): void {
    this.form = this.forms.group({
      title:[null, [Validators.required]],
      body:[null, [Validators.required]]
    })
  }

  title!:string;
  body!:string;
  form!:FormGroup;
 
  newPosts:Iposts[]= []
  carico:boolean= false;
  creaNuovo(){

    console.log(this.form.valid);
    
    let nuovo = new ClassePrincipale(0, this.title, this.body)
    this.newPosts.push(nuovo)
    console.log(this.newPosts);
    this.carico=true
    this.newPost.createNewPost(nuovo).subscribe((res: any)=>{console.log(res); this.carico=false; Swal.fire('Utente creato corretamente') })
    
  }
  
  
  
}
