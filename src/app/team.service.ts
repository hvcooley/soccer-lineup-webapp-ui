import { Injectable } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './mock-teams';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(){};


  // getHeroesSynchronous(): Hero[] {
  //   return HEROES;
  // }

  //Used when using fake mock data from a local file
  getTeams(): Observable<Team[]> {
    //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    //HTTP tutorial shows how to do w/ an HTTP request: https://angular.io/tutorial/tour-of-heroes/toh-pt6
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
