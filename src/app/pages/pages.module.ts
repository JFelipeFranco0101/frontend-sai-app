import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { RouterModule } from '@angular/router';

// Modulos
import { SharedModule } from '../shared/shared.module';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PersonaComponent } from './persona/persona.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    PersonaComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [DashboardComponent],
})
export class PagesModule { }
