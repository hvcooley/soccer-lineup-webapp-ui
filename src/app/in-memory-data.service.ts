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
      { id: 11, name: 'Delbarton Varsity Soccer 16/17', players: [
        {id: 1, firstName: 'Harrison', lastName: 'Cooley', teamId: '11', jerseyNum: 10, position: 'CF'},
        {id: 2, firstName: 'Eric', lastName: 'Hsieh', teamId: '11', jerseyNum: 2, position: 'LB'},
        {id: 3, firstName: 'Andrew', lastName: 'Carolan', teamId: '11', jerseyNum: 26, position: 'CB'},
        {id: 4, firstName: 'Leo', lastName: 'Cooley', teamId: '11', jerseyNum: 39, position: 'CDM'},], 
        isFavorite: true, isMyTeam: true, 
        gameLabelList: [
          {id: 1, date: '2017-09-14', opponentTeamName: 'Chatham', isHome: true, myTeamGoals: 5, opponentTeamGoals: 1},
          {id: 2, date: '2017-09-10', opponentTeamName: 'Mendham', isHome: true, myTeamGoals: 2, opponentTeamGoals: 0},
          {id: 3, date: '2017-09-07', opponentTeamName: 'Randolph', isHome: true, myTeamGoals: 7, opponentTeamGoals: 0},
          {id: 4, date: '2017-09-05', opponentTeamName: 'Morristown', isHome: true, myTeamGoals: 3, opponentTeamGoals: 2}
        ],
        resultsList: [
          {id: 5, date: '2017-08-24', opponentTeamName: 'Pope John', isHome: true, myTeamGoals: 5, opponentTeamGoals: 1},
          {id: 6, date: '2017-08-24', opponentTeamName: 'Delran', isHome: true, myTeamGoals: 2, opponentTeamGoals: 1},
          {id: 7, date: '2017-08-23', opponentTeamName: 'Damatha Catholic', isHome: true, myTeamGoals: 7, opponentTeamGoals: 0},
          {id: 8, date: '2017-08-23', opponentTeamName: 'Chaminade', isHome: true, myTeamGoals: 3, opponentTeamGoals: 0}
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