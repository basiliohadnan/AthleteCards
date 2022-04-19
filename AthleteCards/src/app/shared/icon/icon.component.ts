import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() source: string = ''
  @Input() alt: string = ''
  @Input() height: number = 1
  @Input() width: number = 1


  constructor() { }

  ngOnInit(): void {
  }

}
