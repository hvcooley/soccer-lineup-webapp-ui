import { Injectable } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './mock-teams';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient){}
    private teamsUrl = 'api/teams';  // URL to web api
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };




  getTeams(): Observable<Team[]> {
    const teams = of(TEAMS);
    return teams;
  }

  getTeam(id: number): Observable<Team> {
    const team = TEAMS.find(t => t.id === id)!;
    return of(team);
  }

  searchTeams(term: string): Observable<Team[]> {
    if (!term.trim()) {
      return of([]);
    }
    return new Observable<Team[]>;
    // return this.http.get<Team[]>(`${this.teamsUrl}/?name=${term}`).pipe(
    //   tap(x => x.length ?
    //     //this.log(`found heroes matching "${term}"`) :
    //     //this.log(`no heroes matching "${term}"`)),
    //   catchError(this.handleError<Team[]>('searchHeroes', []))
    // );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}