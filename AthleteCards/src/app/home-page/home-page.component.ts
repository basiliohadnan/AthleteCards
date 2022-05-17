import { Component } from '@angular/core';
import { ProfilePageService } from '../profile-page/profile-page.service';
import { AthleteStats } from '../shared/interfaces/athlete-stats';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  token: string = 'ex: 2de421bfac076462a...'

  constructor(
    private profilePageService: ProfilePageService
  ) { }


  receiveValue(value: string) {
    this.token = value
  }

  validateToken(token: string) {
    if (token.length < 40) {
      return false
    }
    else {
      return true
    }
  }

  viewAthleteCard() {
    if (!this.validateToken(this.token)) {
      alert("Token must be at least 40 characters long... Try again.")
    }
    else {
      this.profilePageService.loadProfilePage(this.token)
    }
  }
}
