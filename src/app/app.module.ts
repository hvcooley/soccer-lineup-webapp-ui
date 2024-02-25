import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { TeamSearchComponent } from './team-search/team-search.component';
import { TestComponent } from './test/test.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestComponent,
    TeamSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TeamsComponent,
    TeamDetailComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
