import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
  ) {
    this.recuperarUsuario = this.fb.group({
      correo: ['', Validators.required]
    })
  }
  ngOnInit(): void { }

  recuperar() {
    const email = this.recuperarUsuario.value.correo;
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
    this.toastr.info('Le enviamos un correo para restablecer su contraseña','Contraseña restaurada')
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.loading = false;
      this.toastr.error(this.firebaseError.CodeError(error.code), 'Error');
    })
  }
}

