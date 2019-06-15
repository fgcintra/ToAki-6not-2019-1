import {Component, OnInit} from '@angular/core';
import {EventoService} from '../services/evento.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventosService: EventoService) {
  }

  eventosLista: Array<Object> = [{}];
  oficinaSelecionada: Object = {};
  step: number = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    this.eventosLista = this.eventosService.listarTodos();
  }

  retornaOficina(eId: Number, oId: Number) {
    this.oficinaSelecionada = this.eventosService.retornaOficina(eId, oId);

    console.log(this.oficinaSelecionada);

  }

}
