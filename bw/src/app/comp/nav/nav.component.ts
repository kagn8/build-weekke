import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private navAuth:AuthService) { }

  ngOnInit(): void {
    this.logged = this.navAuth.isUserLoggedIn()
  }
  logged:boolean=false;




}
