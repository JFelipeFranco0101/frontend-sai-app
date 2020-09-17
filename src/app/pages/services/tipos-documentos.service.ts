import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TipoDocumento } from 'src/app/models/tipo-documento.models';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TiposDocumentosService {

  public url = 'http://localhost:8180/api/persona/';
  header: HttpHeaders;

  constructor(private readonly httpCliente: HttpClient,
              private readonly localStorage: LocalStorageService,
              private readonly authService: AuthService) { }

  consultarTipoDocumento(): Observable<TipoDocumento[]> {
    return this.httpCliente.get<TipoDocumento[]>(`${this.url}tipoDocumento`);
  }
}
