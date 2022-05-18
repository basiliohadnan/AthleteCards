import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllRunTotals } from '../shared/interfaces/all-run-totals';
import { AthleteStats } from '../shared/interfaces/athlete-stats';
import { LoggedAthleteInfo } from '../shared/interfaces/logged-athlete-info';
import { metersToKilometers } from '../shared/methods/metersToKilometers';
import { ProfilePageService } from './profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  private token: string = ''
  athleteStats!: AthleteStats
  athleteStatsAllRunTotals!: AllRunTotals
  loggedAthleteInfo!: LoggedAthleteInfo
  avgSpeed: any
  avgPace: any

  constructor(private activatedRoute: ActivatedRoute, private profilePageService: ProfilePageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params && params.token) {
        this.token = params.token
        this.logActivityStats()
      }
    })
  }

  getLoggedInAthlete() {
    this.profilePageService.getLoggedInAthlete(this.token).subscribe((response: LoggedAthleteInfo) => {
      console.log(response);
      this.loggedAthleteInfo = response
    })
  }

  logActivityStats() {
    this.profilePageService.logActivityStats(this.token).subscribe((response: AthleteStats) => {
      this.athleteStats = response
      this.athleteStatsAllRunTotals = this.athleteStats.all_run_totals
      this.formatActivityStats()
      this.getLoggedInAthlete()
    })
  }

  formatActivityStats() {
    this.athleteStatsAllRunTotals.distance = Math.trunc(metersToKilometers(this.athleteStats.all_run_totals.distance))
    this.athleteStatsAllRunTotals.elapsed_time = this.athleteStatsAllRunTotals.elapsed_time / 60 / 60
    this.athleteStatsAllRunTotals.moving_time = Math.trunc(this.athleteStatsAllRunTotals.moving_time / 60 / 60)
    this.avgSpeed = (this.athleteStatsAllRunTotals.distance / this.athleteStatsAllRunTotals.elapsed_time).toFixed(2)
    this.avgPace = (this.athleteStatsAllRunTotals.moving_time / this.athleteStatsAllRunTotals.distance * 60).toFixed(2)
  }
}
