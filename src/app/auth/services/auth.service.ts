import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RegistrarUsuario } from '../../models/registrar-usuario.models';
import { LoginToFront, LoginToBack, UsuarioToFront } from '../../models/login.model';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getUsuarioService: LoginToFront;
  public url = 'http://localhost:8180/api/auth/';

  constructor(private httpCliente: HttpClient,
              private readonly localStorage: LocalStorageService) { }

  registrarUsuario(usuario: RegistrarUsuario): Observable<any> {
    return this.httpCliente.post(`${this.url}signup`, usuario, { responseType: 'text' });
  }

  login(loginToBack: LoginToBack): Observable<boolean> {
    const headers = { 'Content-Type': 'application/json' };
    return this.httpCliente.post<LoginToFront>(`${this.url}login`, loginToBack, { headers })
      .pipe(map((data: LoginToFront) => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('usuario', data.usuario);
        this.getUsuarioService = data;
        return true;
      }));
  }

  actualizarUsuario(usuarioActualizar: RegistrarUsuario): Observable<any> {
    return this.httpCliente.put(`${this.url}actualizarUsuario`, usuarioActualizar);

  }

  get token(): string {
    return this.localStorage.retrieve('authenticationtoken') || '';
  }

  get usuarioLogueado(): UsuarioToFront {
    return this.localStorage.retrieve('usuario');
  }
}
