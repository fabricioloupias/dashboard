import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { AuthGuard } from '../core/auth.guard'
import { AuthService } from '../core/auth.service'


@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {
  title: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  
    


  constructor(private breakpointObserver: BreakpointObserver, public afAuth: AngularFireAuth, private auth: AuthService) {
   
  }
  ngOnInit() {
  }
    logout() {
      this.afAuth.auth.signOut();
    }
  }
