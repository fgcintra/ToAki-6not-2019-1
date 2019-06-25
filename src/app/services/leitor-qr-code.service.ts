import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { GeolocationService } from './geolocation.service';
import { LeitorQrCodeComponent } from '../leitor-qr-code/leitor-qr-code.component';



@Injectable({
    providedIn: 'root'
})


export class LeitorQrCodeService {

    constructor(private rota : Router, private geoLocalizacao : GeolocationService){
        
    }


    public chamaCamera () {
        
        this.rota.navigate(['teste']);

    }

    public async verificaDistancia(oficina) {
        let FATEC_LATITUDE = -20.5144785;
        let FATEC_LONGITUDE = -47.4003616;

        let teste = await this.geoLocalizacao.obterPos();

        // let distancia = await this.geoLocalizacao.distancia(teste.coords.latitude, teste.coords.longitude, FATEC_LATITUDE, FATEC_LONGITUDE);
        let distancia = await this.geoLocalizacao.distancia(FATEC_LATITUDE,FATEC_LONGITUDE, FATEC_LATITUDE, FATEC_LONGITUDE);

        if( (distancia * 1000) <= 0.075){

            this.chamaCamera();

            localStorage.setItem("oficina", JSON.stringify(oficina));
        }
        else{
            console.log('Não esta na fatec');
        }
    }

}