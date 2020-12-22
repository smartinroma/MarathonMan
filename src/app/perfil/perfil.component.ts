import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilService, Publicacion, Usuario, } from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  comentario: Publicacion[];
  corredor: Usuario;
  formulario: FormGroup;

  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) {
    this.comentario = [];

    this.formulario = new FormGroup({
      titulo: new FormControl(),
      comentario: new FormControl()
    })


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



  async onSubmitPublicado() {
    const mensaje = await this.perfilService.addPublicado(this.formulario.value);
    console.log(mensaje);
    //alert('Comentario publicado correctamente')
    this.formulario.reset();
    this.perfilService.getPerfilLogado()
      .then(response => {
        this.corredor = response
      })
      .catch(error => {
        console.log(error);

      })
  }

  async onBorrar(pId) {
    const mensaje = await this.perfilService.borrarPublicado(pId);
    console.log(mensaje);
    //alert('Comentario borrado correctamente');
    this.perfilService.getPerfilLogado()
      .then(response => {
        this.corredor = response
      })
      .catch(error => {
        console.log(error);

      })
  }


}