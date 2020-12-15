import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.css']
})
export class RegistroFormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private perfilService: PerfilService
  ) {

    this.formulario = new FormGroup({
      imagen: new FormControl('', []),
      nombre: new FormControl('', []),
      apellidos: new FormControl('', []),
      edad: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      telefono: new FormControl('', []),
      nivel: new FormControl('', []),
      zona: new FormControl('', [])
    })

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const mensaje = await this.perfilService.addPerfil(this.formulario.value);
    console.log(mensaje);
    alert('Usuario creado correctamente')

    this.formulario.reset();

  }

  /* onSubmit() {
    this.perfilService.addPerfil(this.formulario.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  } */

}
