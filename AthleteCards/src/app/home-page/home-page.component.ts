import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  ngOnInit(): void {
  }

  showInputValue(){
    var inputValue = document.getElementById('tokenInput')?.textContent
    console.log('value: ', inputValue);
  }

  showAthleteCard(){
    alert("botão clicado!")
    this.showInputValue()
  }
}