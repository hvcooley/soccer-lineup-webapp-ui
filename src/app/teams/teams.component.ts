import { Component } from '@angular/core';
import {Team} from '../team';
import { TeamService } from '../team.service';
import {FormsModule} from '@angular/forms';

import {
    NgIf,
    NgFor,
    UpperCasePipe,
  /* . . . */
} from '@angular/common';
import { TeamDetailComponent } from '../team-detail/team-detail.component';

@Component({
  standalone: true,
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule, TeamDetailComponent]
})
export class TeamsComponent{
  teams: Team[] = [];
  selectedTeam?: Team;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teams = this.teamService.getTeams();
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

}


