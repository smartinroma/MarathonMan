import { Component, OnInit } from '@angular/core';
import { PerfilService, Usuario } from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  comentario: string;
  arrayCorredores: Usuario[];

  constructor(
    private perfilService: PerfilService
  ) {
    this.comentario = '';

    this.arrayCorredores = [];
  }

  ngOnInit(): void {
    /* this.perfilService.getCorredorById()
      .then(response => {
        //this.arrayCorredores = response

      })
      .catch(error => console.log(error)) */
  }

  //getCorredorById() { }

  async onSubmitComentario() {
    //await this.perfilService.addComentario(this.comentario)
  }


}