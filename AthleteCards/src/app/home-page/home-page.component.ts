import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  token: string = ''

  constructor() {
  }

  receiveValue(value: string) {
    this.token = value
    console.log(value)
  }
}