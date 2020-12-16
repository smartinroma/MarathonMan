import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


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
    private router: Router
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
}
