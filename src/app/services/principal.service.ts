import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Event {
  titulo: string;
  nivel: string;
  fecha: Date;
  hora: string;
  zona: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  //private events: Event[];
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

}
