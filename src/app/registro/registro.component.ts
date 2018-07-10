import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

export interface DialogData {
  mensaje: string;
}


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ UsuarioService ]
})
export class RegistroComponent implements OnInit {

  registerUser: FormGroup;
  hide = true;
  mensaje: string;
  
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { 
 
  }

  ngOnInit() {
    this.registerUser = this.fb.group({
      'name': this.fb.control('', Validators.required),
      'apellido': this.fb.control('', Validators.required),
      'email': this.fb.control('', Validators.required),
      'password': this.fb.control('', Validators.required),
      'pais': this.fb.control(''),
    })   
  }

  addUser(){
    console.log(this.registerUser.value);
    this.usuarioService.postUser(this.registerUser.value)
      .subscribe(res => {
        console.log(res);
      })
  }
  
  cleanForm(){ 
    this.registerUser.reset 
  }

}
