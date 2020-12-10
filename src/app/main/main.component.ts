import { Component, OnInit } from '@angular/core';

import { Event, PrincipalService } from '../services/principal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arrayEventos: Event[];
  //private baseUrl: string;

  constructor(
    private principalService: PrincipalService) {
    this.arrayEventos = [];
    //this.baseUrl = 'http://localhost:3000/api/eventos';
  }

  ngOnInit(): void {
    this.principalService.getAllEvents()
      .then(response => {
        this.arrayEventos = response;
      })
      .catch(error => console.log(error));
  }

}
