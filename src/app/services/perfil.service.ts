import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Usuario {
  id: number;
  imagen?: string;
  nombre: string;
  apellidos: string;
  edad?: number;
  email: string;
  password: string;
  telefono?: number;
  nivel: string;
  zona: string;
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {


  //arrayPublicaciones: string[]
  private baseUrl: string;
  private baseUrl2: string;

  constructor(
    private httpClient: HttpClient
  ) {

    //this.arrayPublicaciones = []

    this.baseUrl = 'http://localhost:3000/api/corredores';
    this.baseUrl2 = 'http://localhost:3000/api/corredores/:corredorId'
  }

  /* getAllPublicaciones() {
    return new Promise((resolve, reject) => {
      resolve(this.arrayPublicaciones);
    });
  } */

  getAllCorredores(): Promise<Usuario[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.get<Usuario[]>(this.baseUrl, httpOptions).toPromise();
  }


  getCorredorById(): Promise<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.get<Usuario>(this.baseUrl2, httpOptions).toPromise();
  }

  addPerfil(pPerfil: Usuario): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.post<any>(this.baseUrl, pPerfil, httpOptions).toPromise();
  }

  editarPerfil() { }

  borrarPerfil() { }

  /* addPublicaciones(pPublicacion: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.arrayPublicaciones.push(pPublicacion);
      resolve('Comentario publicado')
    })

  } */

  borrarPublicacion() { }

  /* buscarPerfiles() { } */

}

