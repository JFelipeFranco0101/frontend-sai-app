import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaFront, PersonaBack } from '../../../models/persona.models';
import { TransformadorPersona } from '../../../transformadores/transformar-persona';
import { TipoDocumento } from '../../../models/tipo-documento.models';
import { UsuarioToFront } from '../../../models/login.model';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

  @Input() public tiposDocumentos: TipoDocumento[];
  @Input() public usuarioLogueado: UsuarioToFront;
  @Output() public guardarPersonaEmitter = new EventEmitter<PersonaBack>();

  public registrarPersonaForm: FormGroup;
  public persona: PersonaFront;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
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
      email: ['', [Validators.required, Validators.email]],
      direccionRecidencia: ['', Validators.required],
      celular: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  guardarPersona() {
    this.persona = this.registrarPersonaForm.getRawValue();
    this.registrarPersonaForm.disable();
    const personaTransformada = TransformadorPersona.transformPersonaToPersonaBack(this.persona, this.usuarioLogueado);
    this.guardarPersonaEmitter.emit(personaTransformada);

  }

  public hasError(controlName: string, errorName: string) {
    return this.registrarPersonaForm.controls[controlName].hasError(errorName);
  }
}
