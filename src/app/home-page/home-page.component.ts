import { Component } from '@angular/core';
import { ProfilePageService } from '../profile-page/profile-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  id: number = 0
  token: string = ''

  constructor(
    private profilePageService: ProfilePageService
  ) { }

  receiveIdValue = (id: number): number => this.id = id

  validateId = (id: number): boolean => (id < 7) ? false : true

  receiveTokenValue = (token: string): string => this.token = token

  validateToken = (token: string): boolean => (token.length < 40 || !token) ? false : true

  viewAthleteCard(): void {
    if (!this.validateToken(this.token))
      alert("Invalid token... Try again.")
    else if (!this.validateId(this.id))
      alert("Invalid id... Try again.")
    else
      this.profilePageService.loadProfilePage(this.token, this.id)
  }
}