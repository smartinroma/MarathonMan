import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EventoFormularioComponent } from './evento-formulario/evento-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { RegistroFormularioComponent } from './registro-formulario/registro-formulario.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EventoFormularioComponent,
    PerfilComponent,
    EnlacesComponent,
    ComentariosComponent,
    RegistroFormularioComponent,
    IntroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
