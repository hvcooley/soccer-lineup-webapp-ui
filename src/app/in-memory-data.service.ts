import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Team } from './team';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      { id: 11, name: 'Delbarton Varsity Soccer 2016/2017' },
      { id: 12, name: 'Georgetown Club Soccer 2021/22' },
      { id: 13, name: 'PDA Jinky 99/00' },
      { id: 14, name: 'Torpedoes 00s' },
      { id: 15, name: 'Napoli Fantasy Team' },
      { id: 16, name: 'Delbarton Varsity Soccer 2015/16' },
      { id: 17, name: 'Delbarton Freshman Soccer 2013/14' }
    ];
    return {teams};
  }

  // Overrides the genId method to ensure that a team always has an id.
  // If the teams array is empty,
  // the method below returns the initial number (11).
  // if the teams array is not empty, the method below returns the highest
  // team id + 1.
  genId(teams: Team[]): number {
    return teams.length > 0 ? Math.max(...teams.map(team => team.id)) + 1 : 11;
  }
}