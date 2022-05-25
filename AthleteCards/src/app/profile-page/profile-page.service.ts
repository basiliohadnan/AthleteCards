import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AthleteStats } from '../shared/interfaces/athlete-stats';
import { LoggedAthleteInfo } from '../shared/interfaces/logged-athlete-info';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {
  id: number = 0
  urlBase: string = "https://www.strava.com/api/v3/athlete"

  constructor(private httpClient: HttpClient, private router: Router) { }

  private createHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  }

  getLoggedInAthlete = (token: string): Observable<LoggedAthleteInfo> =>
    this.httpClient.get<LoggedAthleteInfo>(this.urlBase, { headers: this.createHeaders(token) })

  logActivityStats(token: string, id: number): Observable<AthleteStats> {
    var url = `${this.urlBase}s/${id}/stats`
    return this.httpClient.get<AthleteStats>(url, { headers: this.createHeaders(token) })
  }

  loadProfilePage = (token: string, id: number): Promise<boolean> => this.router.navigateByUrl('profile/' + token + '/id/' + id)
}