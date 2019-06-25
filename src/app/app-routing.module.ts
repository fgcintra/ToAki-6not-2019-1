import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';
import {GeolocationComponent} from './geolocation/geolocation.component';
import { LeitorQrCodeComponent } from './leitor-qr-code/leitor-qr-code.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'geolocation',
    component: GeolocationComponent
  },
  {
    path: 'teste',
    component: LeitorQrCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
