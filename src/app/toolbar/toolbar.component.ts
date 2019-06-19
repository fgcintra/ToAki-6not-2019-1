import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() emitter = new EventEmitter<boolean>();
  
  titulo = 'Fatec ToAki';
  status = false;
  constructor() { }

  mudar(){
    this.status = !this.status;
    this.emitter.emit(this.status);
  }
  ngOnInit() {
  }

}
