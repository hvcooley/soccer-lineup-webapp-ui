import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

import { TestComponent } from './test/test.component';
import { TestCopyComponent } from './test-copy/test.component';
import { GameDetailComponent } from './game-detail/game-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'detail/:id', component: TeamDetailComponent },
  { path: 'gameDetails/:id', component: GameDetailComponent },
  { path: 'test', component: TestComponent },
  { path: 'test-copy', component: TestCopyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }