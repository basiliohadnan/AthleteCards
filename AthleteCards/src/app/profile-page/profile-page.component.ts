import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllRideTotals } from '../shared/interfaces/all-ride-totals';
import { AllRunTotals } from '../shared/interfaces/all-run-totals';
import { AthleteStats } from '../shared/interfaces/athlete-stats';
import { LoggedAthleteInfo } from '../shared/interfaces/logged-athlete-info';
import { Conversions } from '../shared/utils/Conversions';
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
  athleteStatsAllRideTotals!: AllRideTotals
  loggedAthleteInfo!: LoggedAthleteInfo
  runningAvgSpeed: any
  runningAvgPace: any
  cyclingAvgSpeed: any


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
      this.loggedAthleteInfo = response
    })
  }

  logActivityStats() {
    this.profilePageService.logActivityStats(this.token).subscribe((response: AthleteStats) => {
      this.athleteStats = response
      this.athleteStatsAllRunTotals = this.athleteStats.all_run_totals
      this.athleteStatsAllRideTotals = this.athleteStats.all_ride_totals
      this.formatActivityStats()
      this.getLoggedInAthlete()
    })
  }

  formatActivityStats() {
    this.athleteStatsAllRunTotals.distance = Conversions.metersToKilometers(this.athleteStatsAllRunTotals.distance)
    this.athleteStatsAllRunTotals.moving_time = Conversions.secondsToHours(this.athleteStatsAllRunTotals.moving_time)
    this.runningAvgPace = Conversions.runningAvgPace(this.athleteStatsAllRunTotals.moving_time, this.athleteStatsAllRunTotals.distance)
    this.athleteStatsAllRideTotals.distance = Conversions.metersToKilometers(this.athleteStatsAllRideTotals.distance)
    this.athleteStatsAllRideTotals.moving_time = Conversions.secondsToHours(this.athleteStatsAllRideTotals.moving_time)
    this.cyclingAvgSpeed = Conversions.avgSpeed(this.athleteStatsAllRideTotals.distance, this.athleteStatsAllRideTotals.moving_time)
  }
}
