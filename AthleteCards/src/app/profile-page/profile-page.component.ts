import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllRunTotals } from '../shared/interfaces/all-run-totals';
import { AthleteStats } from '../shared/interfaces/athlete-stats';
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

  constructor(private activatedRoute: ActivatedRoute, private profilePageService: ProfilePageService) { }

  logActivityStats() {
    this.profilePageService.logActivityStats(this.token).subscribe((response: AthleteStats) => {
      this.athleteStats = response
      this.athleteStatsAllRunTotals = this.athleteStats.all_run_totals
      console.log(this.athleteStatsAllRunTotals);
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params && params.token) {
        this.token = params.token
        this.logActivityStats()
      }
    })
  }
}
