import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Team } from './team';
import { TEAMS } from './mock-teams';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }
  
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

  // updateTeam(team: Team): Observable<any> {
  //   return this.http.put(this.teamsUrl, team, this.httpOptions).pipe(
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  *
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
  
}
