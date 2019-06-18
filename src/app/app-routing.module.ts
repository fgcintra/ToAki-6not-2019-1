import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GeolocalizacaoComponent } from './geolocalizacao/geolocalizacao.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'geolocalizacao', component: GeolocalizacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
