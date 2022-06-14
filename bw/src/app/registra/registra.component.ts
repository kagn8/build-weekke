import { Component, OnInit } from '@angular/core';
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
  }


}
