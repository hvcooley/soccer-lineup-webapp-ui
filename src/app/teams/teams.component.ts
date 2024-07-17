import { Component, OnInit } from '@angular/core';
import {Team} from '../team';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit{
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
    .subscribe(teams => this.teams = teams)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.teamService.addTeam({ name } as Team)
      .subscribe(team => {
        this.teams.push(team);
      });
  }

  delete(team: Team): void {
    this.teams = this.teams.filter(t => t !== team,);
    this.teamService.deleteTeam(team.id).subscribe();
  }

}


