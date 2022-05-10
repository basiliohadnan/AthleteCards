import { Component } from '@angular/core';
import { ProfilePageService } from '../profile-page/profile-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  token: string = ''

  constructor(private profilePageService: ProfilePageService) {
  }

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
      alert("Token must have at least 42 characters... Try again.")
    }
    else {
      this.profilePageService.logActivityStats(this.token).subscribe(x => {
        console.log(x);
      })
      this.profilePageService.loadProfilePage(this.token)
    }
  }
}
