import { Component, OnInit } from '@angular/core';
import { GeolocalizacaoService } from '../services/geolocalizacao.service'; 

@Component({
  selector: 'app-geolocalizacao',
  templateUrl: './geolocalizacao.component.html',
  styleUrls: ['./geolocalizacao.component.scss']
})
export class GeolocalizacaoComponent implements OnInit {
  FATEC_LAT = -20.5144785;
  FATEC_LONG = -47.4003616;


  constructor(private GeoService: GeolocalizacaoService) { }

  public pos: any;
  public dist: number;
  public msgErro: string;

  async ngOnInit() {
    try {
      this.pos = await this.GeoService.obterPos();
      this.dist = this.GeoService.distancia(this.pos.coords.latitude, this.pos.coords.longitude, this.FATEC_LAT, this.FATEC_LONG);
      console.log(this.pos);
    } catch (e) {
      console.error(e);
      this.msgErro = 'Você precisa permitir a obtenção da sua localização';
    }
  }

}
