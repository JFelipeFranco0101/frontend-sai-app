import { Component, OnInit } from '@angular/core';
import { UsuarioToFront } from '../../models/login.model';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuarioLogueado: UsuarioToFront;

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.cargarInformacionUsuarioLogueado();
  }

  cargarInformacionUsuarioLogueado() {
    this.usuarioLogueado = this.authService.usuarioLogueado;
  }
}
