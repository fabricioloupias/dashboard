import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

export interface User {
  id: string; 
  name: string; 
  apellido: string;
  email: string;
  pais: string;
}

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.css']
})
export class CrudUserComponent implements OnInit {

  private userDoc: AngularFirestoreDocument<User>;
  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  crudUser: FormGroup;
  infoUser: any  = {
    name: '',
    apellido: '',
    email: '',
    pais: ''
  }
  key: string

  constructor(private afs: AngularFirestore, private fb: FormBuilder, public snackBar: MatSnackBar) {
    this.usersCollection = afs.collection<User>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  ngOnInit() {
    this.crudUser = this.fb.group({
      'name': this.fb.control('', Validators.required),
      'apellido': this.fb.control(''),
      'email': this.fb.control(''),
      'pais': this.fb.control(''),
    }) 
    this.crudUser.valueChanges.subscribe(console.log)
  }

  rebuildForm() {
    this.crudUser.reset({
      name: '', 
      apellido: '',
      email: '',
      pais: '',
    });
  }

  async addUser() {
    /*
    this.usersCollection.add(this.crudUser.value);
    console.log(this.crudUser.value)
    this.rebuildForm()
    */
    try{
      await this.usersCollection.add(this.crudUser.value);
      this.snackBar.open('Usuario guardado', 'Undo', {
        duration: 3000
      });
    } catch(err){
      console.log(err)
      this.snackBar.open('Ocurrio algun error', 'Undo', {
        duration: 4000
      });
    }
  }

  deleteUser(deleteUser){
    this.userDoc = this.afs.doc<User>(`users/${deleteUser.id}`);
    this.userDoc.delete();
  }
  editar(user){   
    console.log(user)
    this.key = user.id;
    this.infoUser = user;
    this.userDoc = this.afs.doc<User>(`users/${user.id}`);
    this.crudUser = this.fb.group({
      // 'id': this.fb.control(this.infoUser.id),
      'name': this.fb.control(this.infoUser.name),
      'apellido': this.fb.control(this.infoUser.apellido),
      'email': this.fb.control(this.infoUser.email),
      'pais': this.fb.control(this.infoUser.pais),
    }) 
  }

  updateUser(key){
    console.log(this.crudUser.value, 'editado ok')
    this.userDoc = this.afs.doc<User>(`users/${key}`);
    this.userDoc.update(this.crudUser.value);
    this.rebuildForm()
  }

}
