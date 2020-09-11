import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateMatchPassword } from './validar-match-password';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registrarUsuarioForm: FormGroup;
  public isValidForm: boolean;

  constructor(private readonly router: Router,
              private fb: FormBuilder,
              private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.registrarUsuarioForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
      confirmarClave: ['', Validators.required]
    }, {
      validators: ValidateMatchPassword('clave', 'confirmarClave')
    });
  }

  registrar() {
    this.authService.registrarUsuario(this.registrarUsuarioForm.getRawValue())
      .subscribe(data => {
        this.router.navigate(['/login'], { queryParams: { registrado: 'true' }});
      }, (err) => {
        console.error('Ocurrio un error registrando el usuario! Por favor intentelo nuevamente');
      });
  }

  public hasError(controlName: string, errorName: string) {
    return this.registrarUsuarioForm.controls[controlName].hasError(errorName);
  }

  get formControls() {
    return this.registrarUsuarioForm.controls;
  }
}
