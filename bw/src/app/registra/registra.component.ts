import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RegisterService } from '../register.service';
import { IUser } from '../user';

@Component({
  selector: 'app-registra',
  templateUrl: './registra.component.html',
  styleUrls: ['./registra.component.scss']
})
export class RegistraComponent implements OnInit {

  constructor(private regServ:RegisterService) { }
  authUser:IUser = {
    email: '',
    nome: '',
    password: '',
    cognome: ''
  }
  ngOnInit(): void {
  }
  registrati(){
    this.regServ.register(this.authUser).subscribe(res=>{console.log(res);

    })
    Swal.fire({
      title: 'هل تريد الاستمرار؟',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
      showCancelButton: true,
      showCloseButton: true
    })
  }


}
