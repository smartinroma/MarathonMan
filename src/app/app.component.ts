import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MarathonMan';
  url: string = '';
  visible: boolean;

  constructor() {
    this.visible = false;

  }


  ngOnInit() {
    console.log(window.location.pathname);

    if (window.location.pathname !== "/intro" && window.location.pathname !== "/") {
      this.visible = true;
    }
  }
}
