import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  public hasError(controlName: string, errorName: string) {
    return this.formularioPerfilGroup.controls[controlName].hasError(errorName);
  }
}
