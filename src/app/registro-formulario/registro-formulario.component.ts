import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PerfilService } from '../services/perfil.service';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.css']
})
export class RegistroFormularioComponent implements OnInit {

  formulario: FormGroup;
  tipoPassword: string;

  constructor(
    private perfilService: PerfilService
  ) {

    this.formulario = new FormGroup({
      imagen: new FormControl('', []),
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      edad: new FormControl('', [this.edadValidator]),
      email: new FormControl('', [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d).{4,8}$/)]),
      telefono: new FormControl('', []),
      nivel: new FormControl('', [Validators.required]),
      zona: new FormControl('', [Validators.required])
    })

    this.tipoPassword = 'password';

  }

  ngOnInit(): void {
    this.formulario.get('email')
      .valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => {
        console.log(value);

      })
  }

  async onSubmit() {
    const mensaje = await this.perfilService.addPerfil(this.formulario.value);
    console.log(mensaje);
    alert('Usuario creado correctamente')

    this.formulario.reset();

  }


  edadValidator(control: FormControl) {
    const valor = control.value;

    if (valor === '') return null;

    const MIN = 18;

    if (valor >= 18) {
      return null;
    } else {
      return { edadValidator: { min: MIN } };
    }
  }


}
