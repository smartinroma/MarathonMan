import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService, Usuario } from '../services/perfil.service';

import { Event, PrincipalService } from '../services/principal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arrayEventos: Event[];
  niveles: string[];
  corredoresPorEvento: Usuario[];

  constructor(
    private principalService: PrincipalService,
    private perfilService: PerfilService,
    private router: Router
  ) {

    this.arrayEventos = []
    this.corredoresPorEvento = []

  }

  ngOnInit(): void {
    this.principalService.getAllEvents()
      .then(response => {
        this.arrayEventos = response;
        const arrTemporal = this.arrayEventos.map(evento => evento.nivel)
        const setTemporal = new Set(arrTemporal)
        this.niveles = [...setTemporal];
      })
      .catch(error => console.log(error));
  }

  async onClickApuntarse(pEventoId) {
    //al hacer click, con el usuario logado, se agrega el usuario al evento
    const apuntado = await this.principalService.joinEvento(pEventoId)
    console.log(apuntado);
    if (apuntado.mensaje) {
      this.router.navigate(['/joined']);
    } else {
      alert(apuntado.error)
    }

  }

  async onChange($event) {
    console.log(this.niveles);
    console.log($event.target.value);

    if ($event.target.value === 'todos') {
      this.arrayEventos = await this.principalService.getAllEvents()
    } else {
      this.arrayEventos = await this.principalService.getEventoByNivel($event.target.value)
    }
  }



}
