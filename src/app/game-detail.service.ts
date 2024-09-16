import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { CommonService } from './common.service';
import { GameDetail } from './gameDetail';

@Injectable({
  providedIn: 'root'
})
export class GameDetailService {

  constructor(private http: HttpClient, private logger: NGXLogger, private commonService: CommonService) { }

  private gameDetailUrl = 'api/gameDetail';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getGameDetail(id: number): Observable<GameDetail> {
    const url = `${this.gameDetailUrl}/${id}`;
    return this.http.get<GameDetail>(url).pipe(
      tap(_ => this.logger.info(`fetched gameDetail with id=${id}`)),
      catchError(this.commonService.handleError<GameDetail>(`getGameDetail id=${id}`))
    );
  }
}
