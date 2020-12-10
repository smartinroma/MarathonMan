import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrincipalService } from '../services/principal.service';

@Component({
  selector: 'app-evento-formulario',
  templateUrl: './evento-formulario.component.html',
  styleUrls: ['./evento-formulario.component.css']
})
export class EventoFormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private principalService: PrincipalService
  ) {
    this.formulario = new FormGroup({
      imagen: new FormControl('', []),
      titulo: new FormControl('', []),
      nivel: new FormControl('', []),
      fecha: new FormControl('', []),
      zona: new FormControl('', []),
      hora: new FormControl('', [])
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const mensaje = await this.principalService.addEvent(this.formulario.value);
    console.log(mensaje);
    alert('Evento creado correctamente')

    this.formulario.reset();
  }

}
