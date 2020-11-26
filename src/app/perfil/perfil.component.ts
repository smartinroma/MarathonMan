import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  comentario: string;

  constructor(
    private perfilService: PerfilService
  ) {
    this.comentario = '';
  }

  ngOnInit(): void {
  }

  async onSubmitComentario() {
    await this.perfilService.addComentario(this.comentario)
  }


}