import { Component } from '@angular/core';
import { ProfilePageService } from '../profile-page/profile-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  id: number = 28361582
  token: string = '2de421bfac076462a...'

  constructor(
    private profilePageService: ProfilePageService
  ) { }

  receiveIdValue = (id: number) => this.id = id

  validateId(id: number) {
    if (id < 7) return false
    else return true
  }

  receiveTokenValue = (token: string) => this.token = token


  validateToken(token: string) {
    if (token.length < 40 || !token) return false
    else return true
  }

  viewAthleteCard() {
    if (!this.validateToken(this.token)) alert("Invalid token... Try again.")
    else if (!this.validateId(this.id)) alert("Invalid id... Try again.")
    else this.profilePageService.loadProfilePage(this.token, this.id)
  }
}
