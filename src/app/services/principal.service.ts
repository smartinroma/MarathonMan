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

  private events: Event[];

  constructor() {
    this.events = [
      {
        titulo: 'Carrera nocturna',
        nivel: 'intermedio',
        fecha: new Date('19-11-2020'),
        hora: '22:00', zona: 'Madrid Sur',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Runner_Runner.jpg/250px-Runner_Runner.jpg'
      }
    ]
  }

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
