import { Component, OnInit } from '@angular/core';
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
    private perfilService: PerfilService
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

  async onClickApuntarse(pCorredor) {
    //al hacer click, con el usuario logado, se agrega el usuario al evento
    this.perfilService.getPerfilLogado()
      .then(response => {
        this.corredoresPorEvento.push(pCorredor)
        //console.log(response);
      })
      .catch(error => console.log(error))
    console.log(this.corredoresPorEvento);

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
