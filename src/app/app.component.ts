import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PerfilService } from './services/perfil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MarathonMan';
  url: string = '';
  visible: boolean;

  constructor(
    private router: Router,
    public perfilService: PerfilService
  ) {
    this.visible = false;

  }


  ngOnInit() {
    console.log(this.router.url);
    this.router.events.subscribe((val) => {
      // see also 
      if (val instanceof NavigationEnd) {
        if (this.router.url === "/intro") {
          this.visible = false
        } else {
          this.visible = true
        }
      }
    });

  }


  onSalir() {
    localStorage.removeItem('token_marathon');
  }

}
