import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }
  CodeError(code: string) {
    switch (code) {
      //Correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';
      //Usuari debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';
      //Email inavalido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo Invalido';
      
        //Contraseña incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña incorrecta';
      
      //Contraseña incorrecta
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'Usuario no registrado';
        default:
        return 'Error desconocido';
    }
  }
}

