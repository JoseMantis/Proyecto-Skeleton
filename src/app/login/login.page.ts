import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storage: Storage) {}

  guardarUsuario(){
    this.storage.set('miDato', 'hoal')
    .then(() => console.log('Dato guardado con éxito!'))
    .catch(error => console.error('Error al guardar el dato:', error));
  }

  obtenerUsuario(){
    this.storage.get('miDato')
    .then(valor =>console.log('Dato obtenido:', valor))
    .catch(error =>console.error('Dato no obtenido. error:',error));
  }
  ngOnInit() {
  }
  usuario: string=''; 
  usuarioerror: string='';
  contrasenia: string='';
  contraseniaerror: string='';
  
  validaUsuario(){
    if (this.usuario.length > 8) {
      this.usuarioerror= 'Usuario inválido (más de 8 caracteres).';
      console.log('Usuario inválido (más de 8 caracteres).');
    }
    else if 
      (this.usuario.length < 3) {
        this.usuarioerror= 'Usuario inválido (menos de 3 caracteres).'
        console.log('Usuario inválido (menos de 3 caracteres).');
      }
    else {
      this.usuarioerror = '';
    }
  }
  validaContra(){
    if (this.contrasenia.length == 4) {
      this.contraseniaerror = '';
    }
    else {
      this.contraseniaerror = 'Contraseña inválida (deben ser 4 dígitos).';
      console.log('Contraseña inválida (deben ser 4 dígitos).');
    }
  }

  IniciarSesion() {
    if (!this.usuarioerror && !this.contraseniaerror){
      window.location.href = 'home';
    }
  }
  
}
