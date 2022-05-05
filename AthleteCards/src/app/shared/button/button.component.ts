import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText: string = ''
  @Input() backgroundColor: string = ''
  @Input() route: string[] = []

  constructor(private router: Router) { }

  testMethod(){
    console.log(this.route);
  }
}
