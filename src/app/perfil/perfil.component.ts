import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private PerfilService: PerfilService
  ) { }

  ngOnInit(): void {
  }



}
