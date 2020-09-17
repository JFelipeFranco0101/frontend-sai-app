import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonaBack } from '../../models/persona.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public url = 'http://localhost:8180/api/persona';

  constructor(private readonly httCliente: HttpClient) { }

  persistirPersona(persona: PersonaBack): Observable<any> {
    return this.httCliente.post(this.url, persona);
  }
}
