import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService, Usuario } from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  comentario: string;
  corredor: Usuario;

  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) {
    this.comentario = '';


  }

  ngOnInit(): void {
    this.perfilService.getPerfilLogado()
      .then(response => {
        this.corredor = response
      })
      .catch(error => {
        console.log(error);

      })
  }



  async onSubmitComentario() {
    //await this.perfilService.addComentario(this.comentario)
  }


}