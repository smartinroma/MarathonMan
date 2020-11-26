import { Injectable } from '@angular/core';

export interface Usuario {
  foto: string;
  nombre_usuario: string;
  sexo: string;
  nivel: string;
  zona: string;
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private usuarios: Usuario[];

  constructor() {
    this.usuarios = []
  }


  addPerfil(pPerfil: Usuario) {
    return new Promise((resolve, reject) => {
      this.usuarios.push(pPerfil);
      console.log(this.usuarios);

    });
  }

  editarPerfil() { }

  borrarPerfil() { }

  addComentario() { }

  borrarComentario() { }

  /* buscarPerfiles() { } */

}

