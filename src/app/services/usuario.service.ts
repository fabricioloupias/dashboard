import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedUser: Usuario;
  users: Usuario[];
  readonly URL_API = 'http://localhost:3000/api/usuarios/'

  constructor(private http: HttpClient) { 
    this.selectedUser = new Usuario;
  }

  getUsers(){
    return this.http.get(this.URL_API)
  }

  postUser(user: Usuario){
    return this.http.post(this.URL_API, user);
  }

  putUser(user: Usuario){
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }
  
  deleteUser(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
