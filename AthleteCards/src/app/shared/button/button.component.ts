import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText: string = ''
  @Input() backgroundColor: string = ''
  @Input() route: string[] = []

  value = null
  @Output() valueEmitter = new EventEmitter()

  constructor() { }

  throwInput() {
    this.valueEmitter.emit(this.value)
  }
}
