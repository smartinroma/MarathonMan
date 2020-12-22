import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Coment, ComentariosService } from '../services/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  formulario: FormGroup;
  arrayComentarios: Coment[];

  constructor(
    private comentariosService: ComentariosService
  ) {
    this.arrayComentarios = [];

    this.formulario = new FormGroup({
      titulo: new FormControl(),
      comentario: new FormControl()
    })
  }

  ngOnInit(): void {
    this.comentariosService.getAllComentarios()
      .then(response => {
        this.arrayComentarios = response;
      })
      .catch(error => console.log(error));
  }

  async onSubmit() {
    const mensaje = await this.comentariosService.addComentario(this.formulario.value);
    console.log(mensaje);
    this.formulario.reset();
    this.comentariosService.getAllComentarios()
      .then(response => {
        this.arrayComentarios = response;
      })
      .catch(error => console.log(error));
  }

  async onBorrar(pId) {
    const mensaje = await this.comentariosService.borrarComentario(pId);
    console.log(mensaje);
    this.comentariosService.getAllComentarios()
      .then(response => {
        this.arrayComentarios = response;
      })
      .catch(error => console.log(error));
  }

}
