import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dashboard } from './dashboard';
import { catchError, map, tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  
  constructor(private http: HttpClient, private logger: NGXLogger, private commonService: CommonService) { }

  private dashboardUrl = 'api/dashboard';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.dashboardUrl).pipe(
      tap(_ => this.logger.info(`fetched dashboard`)),
      catchError(this.commonService.handleError<Dashboard>(`getDashboard`))
    );
  }


}
