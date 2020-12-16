import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensajeError: string;

  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formValues) {
    console.log('hola');

    this.mensajeError = null;
    this.perfilService.login(formValues)
      .then(response => {
        console.log(response);

        if (response['error']) {
          this.mensajeError = response['error'];
          console.log(this.mensajeError);

        } else {
          console.log(response['token']);
          localStorage.setItem('token_marathon', response['token']);
          this.router.navigate(['/corredores']);
        }
      })
      .catch(error => console.log(error));
  }

}

