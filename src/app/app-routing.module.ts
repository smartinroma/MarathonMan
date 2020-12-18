import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { EventoFormularioComponent } from './evento-formulario/evento-formulario.component';
import { IntroComponent } from './intro/intro.component';
import { JoinedComponent } from './joined/joined.component';
import { MainComponent } from './main/main.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroFormularioComponent } from './registro-formulario/registro-formulario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/intro' },
  { path: 'intro', component: IntroComponent },
  { path: 'registro', component: RegistroFormularioComponent },
  { path: 'main', component: MainComponent },
  { path: 'joined', component: JoinedComponent },
  { path: 'formulario', component: EventoFormularioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'enlaces', component: EnlacesComponent },
  { path: 'comentarios', component: ComentariosComponent },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
