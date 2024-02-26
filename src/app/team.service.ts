import { Injectable } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './mock-teams';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    ){}


  getTeams(): Observable<Team[]> {
    const teams = of(TEAMS);
    return teams;
  }

  getTeam(id: number): Observable<Team> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const team = TEAMS.find(t => t.id === id)!;
    return of(team);
  }
  
}
