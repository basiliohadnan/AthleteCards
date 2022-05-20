import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {
  id: number = 0
  token: string = ''

  constructor(private httpClient: HttpClient, private router: Router) { }


  getLoggedInAthlete(token: string): Observable<any> {
    var url = "https://www.strava.com/api/v3/athlete"
    this.token = token

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get(url, { headers: headers })
  }


  logActivityStats(token: string, id: number): Observable<any> {
    var url = `https://www.strava.com/api/v3/athletes/${id}/stats`
    this.token = token

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get(url, { headers: headers })
  }

  loadProfilePage(token: string, id: number) {
    this.router.navigateByUrl('profile/' + token + '/id/' + id)
  }
}
