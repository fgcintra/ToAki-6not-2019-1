import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'burger-menu',
  template: `
    <div class="burger-menu" [class.active]="active" (click)="onBurgerClicked()">
      <div class="burger-container">
        <div class="burger-inner"></div>
      </div>
    </div>
  
  `,
  styleUrls: ['menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  @Input() status: boolean;
  @Output() alterar = new EventEmitter<any>();

  active = false;

  ngOnInit() {
    this.active = false || this.status;
  }

  onBurgerClicked() {
    this.active = !this.active;
    this.alterar.emit(this.active);
  }
}

