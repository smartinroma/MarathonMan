import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoFormularioComponent } from './evento-formulario/evento-formulario.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: MainComponent },
  { path: 'formulario', component: EventoFormularioComponent },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
