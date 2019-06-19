import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GeolocalizacaoComponent } from './geolocalizacao/geolocalizacao.component';
import { InicioComponent } from './inicio/inicio.component';
import { LeitorQrCodeComponent } from './leitor-qr-code/leitor-qr-code.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'qrcode', component: LeitorQrCodeComponent },
  { path: 'geolocalizacao', component: GeolocalizacaoComponent },
  { path: 'oficinas', component: OficinasComponent},
  { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
