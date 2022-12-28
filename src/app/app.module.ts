import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ControlComponent } from './components/control/control.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { RegistroTtComponent } from './components/registro-tt/registro-tt.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ImprimirComponent } from './components/imprimir/imprimir.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { SpinerComponent } from './components/carga/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ControlComponent,
    ConsultaComponent,
    RegistroTtComponent,
    PrincipalComponent,
    ImprimirComponent,
    RecuperarComponent,
    VerificarCorreoComponent,
    SpinerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
