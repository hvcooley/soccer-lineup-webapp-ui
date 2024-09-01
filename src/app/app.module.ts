import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsComponent } from './teams/teams.component';
import { TestComponent } from './test/test.component';
import { TestCopyComponent } from './test-copy/test.component';
import { TeamSearchComponent } from './team-search/team-search.component';
import { LoggerModule, NGXLogger, NgxLoggerLevel } from 'ngx-logger';


import { AppRoutingModule } from './app-routing.module';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PlayerDetailComponent } from './player-detail/player-detail.component';


@NgModule({ declarations: [
        AppComponent,
        DashboardComponent,
        TeamsComponent,
        TeamDetailComponent,
        TeamSearchComponent,
        PlayerDetailComponent,
        TestComponent,
        TestCopyComponent
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        FormsModule,
        AppRoutingModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }),
        LoggerModule.forRoot({
            serverLoggingUrl: 'http://localhost:68552/', // Replace with YOUR API
            level: NgxLoggerLevel.TRACE,
            serverLogLevel: NgxLoggerLevel.ERROR,
            disableConsoleLogging: false
          })
    ], 
    providers: [provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom([
            HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
          ]), 
          NGXLogger] })
export class AppModule { }
