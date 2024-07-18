import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: [ './team-search.component.css' ]
})
export class TeamSearchComponent {
  teams$!: Observable<Team[]>;
  private searchTerms = new Subject<string>();

  constructor(private teamService: TeamService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.teams$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.teamService.searchTeams(term)),
    );
  }
}