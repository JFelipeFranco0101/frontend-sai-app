import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TokenInterceptor } from './interceptors/token-interceptor';

// Rutas
import { AppRoutingModule } from './routes';

// Modulos
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

// Material
import {MatButtonModule} from '@angular/material/button';

// Componentes
import { PagenotfoundComponent } from './pagenotfound/pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    PagesModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
