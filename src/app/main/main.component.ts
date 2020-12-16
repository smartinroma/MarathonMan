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
  corredoresPorEvento: Usuario[];
  //private baseUrl: string;

  constructor(
    private principalService: PrincipalService
  ) {
    this.arrayEventos = [];
    this.corredoresPorEvento = [];
    //this.baseUrl = 'http://localhost:3000/api/eventos';
  }

  ngOnInit(): void {
    this.principalService.getAllEvents()
      .then(response => {
        this.arrayEventos = response;
      })
      .catch(error => console.log(error));
  }

  onClickApuntarse(pCorredor) {
    //al hacer click, con el usuario logado, se agrega el usuario al evento
    this.corredoresPorEvento.push(pCorredor)
    console.log(this.corredoresPorEvento);

  }

}
