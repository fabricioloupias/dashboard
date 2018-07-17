import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'
import { map, take, tap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, public snackBar: MatSnackBar){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return this.auth.user.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if(!loggedIn){
          this.snackBar.open('Inicia sesión primero' , 'Undo', {
            duration: 3000
          });
          this.router.navigate(['/login']);
        }
      })
    )
  }
}
