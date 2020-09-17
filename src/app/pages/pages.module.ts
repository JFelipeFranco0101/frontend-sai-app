import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { TokenInterceptor } from '../interceptors/token-interceptor';

// Rutas
import { RouterModule } from '@angular/router';

// Modulos
import { SharedModule } from '../shared/shared.module';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioPersonaComponent } from './persona/formulario-persona/formulario-persona.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormularioPerfilComponent } from './perfil/formulario-perfil/formulario-perfil.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    PersonaComponent,
    FormularioPersonaComponent,
    PerfilComponent,
    FormularioPerfilComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgxWebstorageModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [DashboardComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ]
})
export class PagesModule { }
