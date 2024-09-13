import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { NGXLogger } from 'ngx-logger';
import { Dashboard } from '../dashboard';
import { DashboardService } from '../dashboard.service';
import { TeamLabel } from '../teamLabel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  dashboard: Dashboard | undefined;
  favoriteTeams: TeamLabel[] = [];

  constructor(
    private teamService: TeamService, 
    private dashboardService: DashboardService, 
    private logger: NGXLogger
  ) { }

  ngOnInit(): void {
    this.getDashboardData();
    this.logger.info('Dashboard data fetched:', this.dashboard)

  }

  getDashboardData(): void {
    this.dashboardService.getDashboard()
      .subscribe(dashboard => {
        this.dashboard = dashboard;

        // Filter the teamLabels for favorite teams
        // if (dashboard && dashboard.teamLabels) {
        //   this.favoriteTeams = dashboard.teamLabels.filter(teamLabel => teamLabel.isFavorite);
        // }

        // this.logger.info('Favorite teams:', this.favoriteTeams); // Optional: Logging for debugging
      });
  }

}