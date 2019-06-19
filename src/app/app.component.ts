import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToAki';
  ativo = false;

  status(valor){
    console.log(valor);
    this.ativo = valor;
  }

}
