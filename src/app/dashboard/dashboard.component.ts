import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  teams: Team[] = [];
  favoriteTeams: Team[] = [];

  constructor(private teamService: TeamService, private logger: NGXLogger) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe({
        next: teams => {
          this.teams = teams;
  
          // Populate favoriteTeams based on the teams array
          this.favoriteTeams = teams.filter(team => team.isFavorite);
  
          // Log the data after it's been fetched and processed
          this.logger.info("The favorite teams list is: ", this.favoriteTeams);
          this.logger.info("The favorite team names are: ", this.favoriteTeams.map(team => team.name));
  
          this.logger.info("The teams list is: ", this.teams);
          this.logger.info("The team names are: ", this.teams.map(team => team.name));
          
        },
        error: (e) => this.logger.error(e),
        complete: () => this.logger.info("Completed loading data from teamService")
      }
      );
  }
}