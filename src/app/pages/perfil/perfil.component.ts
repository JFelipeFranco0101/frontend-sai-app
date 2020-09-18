import { Component, Input, OnInit } from '@angular/core';
import { UsuarioToFront } from '../../models/login.model';
import { AuthService } from '../../auth/services/auth.service';
import { PerfilService } from '../services/perfil.service';
import { RegistrarUsuario } from '../../models/registrar-usuario.models';

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

  actualizarPerfil(infoPerfil: RegistrarUsuario) {
    console.log(infoPerfil);
    this.authService.actualizarUsuario(infoPerfil).subscribe(data => console.log(data));
  }

  cargarInformacionUsuarioLogueado() {
    this.usuarioLogueado = this.authService.usuarioLogueado;
  }
}
