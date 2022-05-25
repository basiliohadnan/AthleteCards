import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {

  @Input() source: string = ''
  @Input() alt: string = ''
  @Input() height: number = 1
  @Input() width: number = 1

  constructor() { }
}