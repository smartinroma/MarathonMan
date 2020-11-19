import { Injectable } from '@angular/core';

export interface Event {
  titulo: string;
  nivel: string;
  fecha: Date;
  hora: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private events: Event[];

  constructor() { }

  getAllEvents(): Promise<Event[]> {
    return new Promise((resolve, reject) => {
      resolve(this.events);
    });
  }

  addEvent(pEvent: Event): Promise<string> {
    return new Promise((resolve, reject) => {
      this.events.push(pEvent);
      console.log(this.events);
    });
  }

}
