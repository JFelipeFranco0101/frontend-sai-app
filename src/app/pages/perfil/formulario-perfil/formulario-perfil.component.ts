import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransformadorPerfil } from 'src/app/transformadores/transformador-perfil';
import { UsuarioToFront } from '../../../models/login.model';

@Component({
  selector: 'app-formulario-perfil',
  templateUrl: './formulario-perfil.component.html',
  styleUrls: ['./formulario-perfil.component.css']
})
export class FormularioPerfilComponent implements OnInit {

  public formularioPerfilGroup: FormGroup;
  public isDisabledForm = true;

  @Input() public usuarioLogueado: UsuarioToFront;
  @Output() public actualizarPerfilUsuairo = new EventEmitter<any>();

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.inicializarFormulario();
  }

  crearFormulario() {
    this.formularioPerfilGroup = this.fb.group({
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  inicializarFormulario() {
    this.formularioPerfilGroup.get('usuario').setValue(this.usuarioLogueado.nombreUsuario);
    this.formularioPerfilGroup.get('email').setValue(this.usuarioLogueado.emial);
    this.formularioPerfilGroup.disable();
  }

  actualizarPerfil() {
    const perfilForm = this.formularioPerfilGroup.getRawValue();
    const idUsuarioLogueado = this.usuarioLogueado.idUsuario;
    const perfilBack = TransformadorPerfil.transformadorPerfilToPerfilBack(perfilForm, idUsuarioLogueado);
    this.actualizarPerfilUsuairo.emit(perfilBack);
    this.isDisabledForm = !this.isDisabledForm;
    this.formularioPerfilGroup.disable();
  }

  editarPerfil() {
    this.isDisabledForm = !this.isDisabledForm;
    this.formularioPerfilGroup.enable();
  }

  cancelarEdicionPerfil() {
    this.isDisabledForm = !this.isDisabledForm;
    this.formularioPerfilGroup.disable();
  }

  public hasError(controlName: string, errorName: string) {
    return this.formularioPerfilGroup.controls[controlName].hasError(errorName);
  }
}
