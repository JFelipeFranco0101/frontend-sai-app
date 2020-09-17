import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { PersonaFront } from 'src/app/models/persona.models';
import { TipoDocumento } from 'src/app/models/tipo-documento.models';
import { TiposDocumentosService } from '../services/tipos-documentos.service';
import { TransformadorPersona } from '../../transformadores/transformar-persona';
import { AuthService } from '../../auth/services/auth.service';
import { PersonaService } from '../services/persona.service';
import { UsuarioToFront } from '../../models/login.model';
import { PersonaBack } from '../../models/persona.models';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es_ES'}]
})
export class PersonaComponent implements OnInit {

  public tiposDocumentos: TipoDocumento[];
  public usuarioLogueado: UsuarioToFront;

  constructor(private readonly tipoDocumentoService: TiposDocumentosService,
              private readonly authService: AuthService,
              private readonly personaService: PersonaService) { }

  ngOnInit(): void {
    this.cargarTiposDocumentos();
    this.cargarUsuarioLogueado();
  }

  cargarTiposDocumentos() {
    this.tipoDocumentoService.consultarTipoDocumento().subscribe(data => {
      console.log('ESTOS SON LOS DOCUMENTOS: ', data);
      this.tiposDocumentos = data;
    });
  }

  cargarUsuarioLogueado() {
    this.usuarioLogueado = this.authService.usuarioLogueado;
  }

  guardarPersona(persona: PersonaBack) {
    this.personaService.persistirPersona(persona).subscribe(data => console.log(data));

  }
}
