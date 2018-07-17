import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import {  Observable} from 'rxjs';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  async login() {
    await this.auth.googleLogin()
    return await this.afterSignIn(); 
  }


  private afterSignIn() {
    // Do after login stuff here, such router redirects, toast messages, etc.
    return this.router.navigate(['/']);
  }
}
