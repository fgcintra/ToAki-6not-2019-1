import { Injectable } from '@angular/core';

export class Evento {

}

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  mock: [
      {
        'eventCode': '1aa3kjhnjhsafj8yi99', 
        'eventName': 'Python', 
        'oficineCode': 1, 
        'oficineName': 'Python', 
        'oficineLocal': 'Laboratório 3',
        'instructorName': 'Roland',
        'startDateTime': '15-06-2019-19-00',
        'endDateTime': '15-06-2019-20-40',
        'beforeInterval': '18-50',
        'afterInterval': '19-20',
      },
      {
        'eventCode': 'jkhsdnfasuh78747435', 
        'eventName': 'Redes', 
        'oficineCode': 2, 
        'oficineName': 'Redes', 
        'oficineLocal': 'Laboratório 2',
        'instructorName': 'Marcelo Montanar',
        'startDateTime': '16-06-2019-19-00',
        'endDateTime': '16-06-2019-20-40',
        'beforeInterval': '18-50',
        'afterInterval': '19-20',
      },
      {
        'eventCode': 'kljashf878583475kkh', 
        'eventName': 'AWS', 
        'oficineCode': 3,
        'oficineName': 'AWS', 
        'oficineLocal': 'Laboratório 5',
        'instructorName': 'Rodrigo W. Mendes',
        'startDateTime': '17-06-2019-19-00',
        'endDateTime': '17-06-2019-20-40',
        'beforeInterval': '18-50',
        'afterInterval': '19-20',
      }
    ]
  constructor() { }
}
