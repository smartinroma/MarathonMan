import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Event {
  titulo: string;
  nivel: string;
  fecha: Date;
  hora: string;
  zona: string;
  imagen: string;
  id: number;
  corredores: number;
}


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  //events: Event[];
  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api/eventos';
  }

  getAllEvents(): Promise<Event[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.get<Event[]>(this.baseUrl, httpOptions).toPromise();
  };


  addEvent(pEvent: Event): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.post<any>(this.baseUrl, pEvent, httpOptions).toPromise();
  }


  getEventoByNivel(pNivel: string): Promise<Event[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.get<Event[]>(this.baseUrl + "/nivel/" + pNivel, httpOptions).toPromise();
  }

  getEventoByZona(pZona: string): Promise<Event[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.get<Event[]>(this.baseUrl + "/zona/" + pZona, httpOptions).toPromise();
  }

  joinEvento(pEventoId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem('token_marathon')
      })
    }
    const body = {
      eventoId: pEventoId
    }
    return this.httpClient.post<any>(this.baseUrl + "/joined", body, httpOptions).toPromise();
  }

}
