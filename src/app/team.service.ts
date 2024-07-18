import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Team } from './team';
import { TEAMS } from './mock-teams';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  private teamsUrl = 'api/teams';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl)
    .pipe(tap(_ => this.log('fetched teams')),
    catchError(this.handleError<Team[]>('getTeams', [])))
  }

  getTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http.get<Team>(url).pipe(
      tap(_ => this.log(`fetched team id=${id}`)),
      catchError(this.handleError<Team>(`getTeam id=${id}`))
    );
  }

  updateTeam(team: Team): Observable<any> {
    return this.http.put(this.teamsUrl, team, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateTeam'))
    );
  }

  /** POST: add a new team to the server */
  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.teamsUrl, team, this.httpOptions).pipe(
      tap((newTeam: Team) => this.log(`added team w/ id=${newTeam.id}`)),
      catchError(this.handleError<Team>('addTeam'))
    );
  }

  /** DELETE: delete the Team from the server */
  deleteTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/${id}`;

    return this.http.delete<Team>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted team id=${id}`)),
      catchError(this.handleError<Team>('deleteTeam'))
    );
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

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* GET teams whose name contains search term */
  searchTeams(term: string): Observable<Team[]> {
    if (!term.trim()) {
      // if not search term, return empty Team array.
      return of([]);
    }
    return this.http.get<Team[]>(`${this.teamsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found teams matching "${term}"`) :
        this.log(`no teams matching "${term}"`)),
      catchError(this.handleError<Team[]>('searchTeams', []))
    );
  }

  /** Log a Team message with the MessageService */
  private log(message: string) {
    console.log(`TeamService: ${message}`);
  }

  
}
