import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { PersonaFront } from 'src/app/models/persona.models';
import { TipoDocumento } from 'src/app/models/tipo-documento.models';
import { TiposDocumentosService } from '../services/tipos-documentos.service';
import { TransformadorPersona } from '../../transformadores/transformar-persona';
import { AuthService } from '../../auth/services/auth.service';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es_ES'}]
})
export class PersonaComponent implements OnInit {

  public registrarPersonaForm: FormGroup;
  public tiposDocumentos;
  public persona: PersonaFront;

  constructor(private readonly fb: FormBuilder,
              private readonly tipoDocumentoService: TiposDocumentosService,
              private readonly authService: AuthService,
              private readonly personaService: PersonaService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.cargarTiposDocumentos();
  }

  crearFormulario() {
    this.registrarPersonaForm = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.minLength(3)]],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      fechaNacimiento: ['', Validators.required],
      email: ['', Validators.required],
      direccionRecidencia: ['', Validators.required],
      celular: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  cargarTiposDocumentos() {
    this.tipoDocumentoService.consultarTipoDocumento().subscribe(data => {
      console.log('ESTOS SON LOS DOCUMENTOS: ', data);
      this.tiposDocumentos = data;
    });
  }

  guardarPersona() {
    this.persona = this.registrarPersonaForm.getRawValue();
    this.registrarPersonaForm.disable();
    const personaTransformada = TransformadorPersona.transformPersonaToPersonaBack(this.persona, this.authService.usuarioLogueado);
    console.log('PERSONA YA TRANSFORMADA: ', personaTransformada);
    this.personaService.persistirPersona(personaTransformada).subscribe(data => console.log(data));

  }

  public hasError(controlName: string, errorName: string) {
    return this.registrarPersonaForm.controls[controlName].hasError(errorName);
  }
}
