import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Coment {
  titulo: string;
  comentario: string
}

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private baseUrl2: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl2 = 'http://localhost:3000/api/comentarios';

  }


  getAllComentarios(): Promise<Coment[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.get<Coment[]>(this.baseUrl2, httpOptions).toPromise();
  }

  addComentario(pComentario): Promise<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.post<string>(this.baseUrl2, pComentario, httpOptions).toPromise();
  }

  borrarComentario(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    }
    return this.httpClient.delete<any>(this.baseUrl2, httpOptions).toPromise();
  }


}