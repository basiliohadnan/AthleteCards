import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() placeholder: any
  value = null
  @Output() valueEmitter = new EventEmitter() 

  constructor() { }

  throwInput() {
    this.valueEmitter.emit(this.value)
  }
}
