import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { RouterModule } from '@angular/router';

// Modulos
import { SharedModule } from '../shared/shared.module';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';

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
    MatSidenavModule
  ],
  exports: [DashboardComponent],
})
export class PagesModule { }
