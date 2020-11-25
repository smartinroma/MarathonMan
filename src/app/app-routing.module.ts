import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoFormularioComponent } from './evento-formulario/evento-formulario.component';
import { MainComponent } from './main/main.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: MainComponent },
  { path: 'formulario', component: EventoFormularioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
