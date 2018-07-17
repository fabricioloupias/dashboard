import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';
import {  Observable, of } from 'rxjs';
import { auth } from 'firebase';
import {MatSnackBar} from '@angular/material';

interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authState: AngularFireAuth;
  user: Observable<User | null>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router, public snackBar: MatSnackBar) { 

    //Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }else {
          return of(null);
        }
      }),
      
    )
  }

  //Login google
  googleLogin(){
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(credential => {
      this.snackBar.open('Bienvenido ' + credential.user.displayName, 'Undo', {
        duration: 3000
      });
      return this.updateUserData(credential.user);
    })
    .catch(error => {
      console.log(error)
      this.snackBar.open('Ocurrio algun error', 'Undo', {
        duration: 3000
      });
    });       
  }

  //Registro email y password
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.snackBar.open('Registro correcto', 'Undo', {
          duration: 3000
        });
        return this.updateUserData(credential.user); // if using firestore
      })
      .catch(error => {
        console.log(error)
        this.snackBar.open('Ocurrio alguno error', 'Undo', {
          duration: 3000
        });
      });
  }

  //Login email y password
  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.snackBar.open('Bienvendio', 'Undo', {
          duration: 3000
        });
        return this.updateUserData(credential.user);
      })
      .catch(error => {
        console.log(error)
        this.snackBar.open('Ocurrio alguno error', 'Undo', {
          duration: 3000
        });
      });
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
    };
    return userRef.set(data);
  }

  
}
