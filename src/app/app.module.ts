import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BurgerMenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GeolocalizacaoComponent } from './geolocalizacao/geolocalizacao.component';
import { InicioComponent } from './inicio/inicio.component';
import { LeitorQrCodeComponent } from './leitor-qr-code/leitor-qr-code.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { OficinasComponent } from './oficinas/oficinas.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BurgerMenuComponent,
    SidenavComponent,
    GeolocalizacaoComponent,
    InicioComponent,
    LeitorQrCodeComponent,
    OficinasComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ZXingScannerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
