import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Team } from './team';
import { Player } from './player';


/*
Test data file to manually create mock DB data. 
*/
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      { id: 11, name: 'Delbarton Varsity Soccer 2016/2017', players: [
        {id: 1, firstName: 'Harrison', lastName: 'Cooley', teamId: '11', jerseyNum: 10, position: 'CF'},
        {id: 2, firstName: 'Eric', lastName: 'Hsieh', teamId: '11', jerseyNum: 2, position: 'LB'},
        {id: 3, firstName: 'Andrew', lastName: 'Carolan', teamId: '11', jerseyNum: 26, position: 'CB'},
        {id: 4, firstName: 'Leo', lastName: 'Cooley', teamId: '11', jerseyNum: 39, position: 'CDM'},], 
        isFavorite: true, isMyTeam: true, 
        gameLabelList: [
          {id: 1, date: '2017-01-16', opponentTeamName: 'Chatham', isHome: true, myTeamGoals: 5, opponentTeamGoals: 1},
          {id: 2, date: '2017-01-16', opponentTeamName: 'Mendham', isHome: true, myTeamGoals: 2, opponentTeamGoals: 0},
          {id: 3, date: '2017-01-16', opponentTeamName: 'Randolph', isHome: true, myTeamGoals: 7, opponentTeamGoals: 0},
          {id: 4, date: '2017-01-16', opponentTeamName: 'Morristown', isHome: true, myTeamGoals: 3, opponentTeamGoals: 2}
        ]
      },
      { id: 12, name: 'Georgetown Club Soccer 2021/22', isFavorite: false, isMyTeaM: true},
      { id: 13, name: 'PDA Jinky 99/00', isFavorite: false, isMyTeaM: true},
      { id: 14, name: 'Torpedoes 00s', isFavorite: false, isMyTeaM: true},
      { id: 15, name: 'Napoli Fantasy Team', isFavorite: false, isMyTeaM: true},
      { id: 16, name: 'Delbarton Varsity Soccer 2015/16', isFavorite: false, isMyTeaM: true},
      { id: 17, name: 'Delbarton Freshman Soccer 2013/14', isFavorite: false, isMyTeaM: true}
    ];

  const players = [
    {id: 1, firstName: 'Harrison', lastName: 'Cooley', teamId: 11, jerseyNum: 10, position: 'CF'},
    {id: 2, firstName: 'Eric', lastName: 'Hsieh', teamId: 11, jerseyNum: 2, position: 'LB'},
    {id: 3, firstName: 'Andrew', lastName: 'Carolan', teamId: 11, jerseyNum: 26, position: 'CB'},
    {id: 4, firstName: 'Leo', lastName: 'Cooley', teamId: 11, jerseyNum: 39, position: 'CDM'}
  ]
    return {teams, players};
  }

  // Overrides the genId method to ensure that a team always has an id.
  // If the teams array is empty,
  // the method below returns the initial number (11).
  // if the teams array is not empty, the method below returns the highest
  // team id + 1.
  genId(teams: Team[]): number {
    return teams.length > 0 ? Math.max(...teams.map(team => team.id)) + 1 : 11;
  }


  genPlayersId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 1;
  }
}