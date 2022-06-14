import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authServ: AuthService) { }

  authUser:Partial<IUser> = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }
  entra(){
    this.authServ.login(this.authUser).subscribe((res:any)=>{console.log(res);
      this.authServ.saveUser(res.accessToken)
    })
  }

}
