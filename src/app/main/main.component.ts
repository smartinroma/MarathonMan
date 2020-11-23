import { Component, OnInit } from '@angular/core';

import { Event, PrincipalService } from '../services/principal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arrayEventos: Event[];

  constructor(private principalService: PrincipalService) { }

  ngOnInit(): void {
    this.principalService.getAllEvents()
      .then(eventos => {
        this.arrayEventos = eventos;
      })
      .catch(error => console.log(error));
  }

}
