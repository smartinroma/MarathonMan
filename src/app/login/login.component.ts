import { Component, OnInit } from '@angular/core';
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
    this.mensajeError = null;
    this.perfilService.login(formValues)
      .then(response => {
        if (response['error']) {
          this.mensajeError = response['error'];
        } else {
          //console.log(response['token']);
          localStorage.setItem('token_marathon', response['token']);
          this.router.navigate(['/corredores']);
        }
      })
      .catch(error => console.log(error));
  }

}
