import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  formulario: FormGroup;
  mensajeError: string;

  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit(formValues) {
    this.mensajeError = null;
    this.perfilService.login(formValues)
      .then(response => {
        console.log(response);

        if (response['error']) {
          this.mensajeError = response['error'];
          alert(this.mensajeError);

        } else {
          console.log(response['token']);
          localStorage.setItem('token_marathon', response['token']);
          this.router.navigate(['/corredores']);
        }
      })
      .catch(error => console.log(error));
  }

}
