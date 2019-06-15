import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  constructor() {
  }

  public mockEventos: Array<Object> = [
    {
      'cod_evento': 1,
      'nom_evento': 'Techweek',
      'oficinas': [
        {
          'cod_oficina': 1,
          'nom_oficina': 'Análise de Dados - O que é e como ingressar na área?',
          'nom_localOficina': 'Sala ???',
          'nom_instrutor': 'Eduardo Rabelo Sepúlvida',
          'dat_inicioOficina': '2019-05-25 11:10:00',
          'dat_fimOficina': '2019-05-25 11:40:00',
          'intervaloInicial': 15,
          'intervalo_final': 15
        },
        {
          'cod_oficina': 2,
          'nom_oficina': 'Como trilhar uma carreira de sucesso',
          'nom_localOficina': 'Sala X',
          'nom_instrutor': 'Bill Gates',
          'dat_inicioOficina': '2019-05-25 10:30:00',
          'dat_fimOficina': '2019-05-25 11:00:00',
          'intervaloInicial': 15,
          'intervalo_final': 15
        },
        {
          'cod_oficina': 3,
          'nom_oficina': 'Escravidão no século XXI',
          'nom_localOficina': 'Sala XXI',
          'nom_instrutor': 'R. C. & CIA',
          'dat_inicioOficina': '2019-05-25 8:30:00',
          'dat_fimOficina': '2019-05-25 9:00:00',
          'intervaloInicial': 15,
          'intervalo_final': 15
        }
      ]
    },
    {
      'cod_evento': 2,
      'nom_evento': 'Ri no D',
      'oficinas': [
        {
          'cod_oficina': 1,
          'nom_oficina': 'Como entrar na Google de Franca',
          'nom_localOficina': 'Sala XXI',
          'nom_instrutor': 'R. C. & CIA',
          'dat_inicioOficina': '2020-05-01 9:00:00',
          'dat_fimOficina': '2020-05-01 10:00:00',
          'intervaloInicial': 15,
          'intervalo_final': 15
        },
        {
          'cod_oficina': 2,
          'nom_oficina': 'Google Franca - Um mito?',
          'nom_localOficina': 'Sala X',
          'nom_instrutor': 'Alforriados',
          'dat_inicioOficina': '2020-05-01 22:00:00',
          'dat_fimOficina': '2020-05-01 22:30:00',
          'intervaloInicial': 15,
          'intervalo_final': 15
        }
      ]
    }
  ];

  public listarTodos(): Array<Object> {
    return this.mockEventos;
  }

  public retornaOficina(eventoId: Number, oficinaId: Number): any {

    let eventoSelecionado: Object = {};
    let oficinaSelecionada: Object = {};
    let eventoEncontrado: boolean = false;

    this.mockEventos.forEach((evento: Object) => {

      // @ts-ignore
      if (evento.cod_evento === eventoId) {
        eventoSelecionado = evento;
        eventoEncontrado = true;
      }

      if (eventoEncontrado) {

        // @ts-ignore
        eventoSelecionado.oficinas.forEach((oficina: Object) => {
          // @ts-ignore
          if (oficina.cod_oficina === oficinaId) {
            oficinaSelecionada = oficina;
          }
        });
      }


    });

    return oficinaSelecionada;
  }

}
