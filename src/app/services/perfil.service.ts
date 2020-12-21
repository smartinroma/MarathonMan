import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Usuario {
  id: number;
  imagen?: string;
  nombre: string;
  apellidos: string;
  edad: number;
  email: string;
  password: string;
  telefono: number;
  nivel: string;
  zona: string;
}

export interface Publicacion {
  id: number;
  titulo: string;
  comentario: string
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {


  //arrayPublicaciones: string[]
  private baseUrl: string;
  private baseUrl2: string;
  private baseUrl3: string;

  constructor(
    private httpClient: HttpClient
  ) {

    //this.arrayPublicaciones = []

    this.baseUrl = 'http://localhost:3000/api/corredores';
    this.baseUrl2 = 'http://localhost:3000/api/corredores/registro';
    this.baseUrl3 = 'http://localhost:3000/api/publicados'
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


  getCorredorById(pId): Promise<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.get<Usuario>(this.baseUrl + "/" + pId, httpOptions).toPromise();
  }


  getPerfilLogado(): Promise<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem('token_marathon')
      })
    }
    return this.httpClient.get<Usuario>(this.baseUrl + "/perfil", httpOptions).toPromise();
  }

  addPerfil(pPerfil: Usuario): Promise<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.post<Usuario>(this.baseUrl2, pPerfil, httpOptions).toPromise();
  }

  registro(formValues: any) {
    return this.httpClient.post(`${this.baseUrl}/registro`, formValues).toPromise();
  }



  login(formValues: any) {
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise();
  }


  estaLogado() {
    if (localStorage.getItem("token_marathon")) {
      return true;
    } else {
      return false;
    }
  }

  getAllPublicados(): Promise<Publicacion[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.get<Publicacion[]>(this.baseUrl3, httpOptions).toPromise();
  }

  addPublicado(pComentario): Promise<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.post<string>(this.baseUrl3, pComentario, httpOptions).toPromise();
  }

  borrarPublicado(pId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    }
    return this.httpClient.delete<any>(this.baseUrl3 + "/" + pId, httpOptions).toPromise();
  }

}

