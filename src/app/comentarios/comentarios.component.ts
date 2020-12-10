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
  comentarios: Coment

  constructor(
    private comentariosService: ComentariosService
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      comentario: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const mensaje = await this.comentariosService.addComentario(this.formulario.value);
    console.log(mensaje);
    alert('Comentario publicado correctamente')

    this.formulario.reset();

  }

}
