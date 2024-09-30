import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Team } from './team';
import { Player } from './player';
import { GameDetail } from './gameDetail';


/*
Test data file to manually create mock DB data. 
*/
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const dashboard = {
      teamLabels: [
        { id: 11, name: 'Delbarton Varsity Soccer 16/17', isFavorite: true,},
        { id: 12, name: 'Georgetown Club Soccer 2021/22', isFavorite: false},
        { id: 13, name: 'PDA Jinky 99/00', isFavorite: false},
        { id: 14, name: 'Torpedoes 00s', isFavorite: false},
        { id: 15, name: 'Napoli Fantasy Team', isFavorite: false},
        { id: 16, name: 'Delbarton Varsity Soccer 2015/16', isFavorite: false},
        { id: 17, name: 'Delbarton Freshman Soccer 2013/14', isFavorite: false}
      ]
    }

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
      { id: 12, name: 'Georgetown Club Soccer 2021/22', isFavorite: false, isMyTeam: true},
      { id: 13, name: 'PDA Jinky 99/00', isFavorite: false, isMyTeam: true},
      { id: 14, name: 'Torpedoes 00s', isFavorite: false, isMyTeam: true},
      { id: 15, name: 'Napoli Fantasy Team', isFavorite: false, isMyTeam: true},
      { id: 16, name: 'Delbarton Varsity Soccer 2015/16', isFavorite: false, isMyTeam: true},
      { id: 17, name: 'Delbarton Freshman Soccer 2013/14', isFavorite: false, isMyTeam: true}
    ];

  const players = [
    {id: 1, firstName: 'Harrison', lastName: 'Cooley', teamId: 11, jerseyNum: 10, position: 'CF'},
    {id: 2, firstName: 'Eric', lastName: 'Hsieh', teamId: 11, jerseyNum: 2, position: 'LB'},
    {id: 3, firstName: 'Andrew', lastName: 'Carolan', teamId: 11, jerseyNum: 26, position: 'CB'},
    {id: 4, firstName: 'Leo', lastName: 'Cooley', teamId: 11, jerseyNum: 39, position: 'CDM'}
  ]

  const games = [
    {id: 1, myTeamId: 11, date: '2017-09-14', actualStartTime: '2017-09-14, 11:49:36 AM', 
      opponentTeam: {id: 18, name: 'Chatham', isFavorite: false, isMyTeaM: false}, 
      players: [
        {id: 101, firstName: 'Jack', lastName: 'Smith', teamId: '18', jerseyNum: 10, position: 'RB'},
        {id: 102, firstName: 'John', lastName: 'Doe', teamId: '18', jerseyNum: 2, position: 'LB'},
        {id: 103, firstName: 'James', lastName: 'John', teamId: '18', jerseyNum: 26, position: 'CB'},
        {id: 104, firstName: 'Borris', lastName: 'Smith', teamId: '18', jerseyNum: 39, position: 'CB'},],
      isHome: true, myTeamGoals: 3, opponentTeamGoals: 0
    }
  ]

  const gameDetails = [
    {id: 1, date: '2017-09-14', actualStartTime: '2017-09-14, 11:49:36 AM', 
      myTeam: {id: 18, name: 'Delbarton Varsity Soccer 16/17', isFavorite: false, isMyTeam: true, 
        playersGameData: [
          {playerId: 1, firstName: 'Harrison', lastName: 'Cooley', teamId: 11, jerseyNum: 10, position: 'CF', isStarter: true, isOnField: true, goals: 2, assists: 1},
          {playerId: 2, firstName: 'Eric', lastName: 'Hsieh', teamId: 11, jerseyNum: 2, position: 'LB', isStarter: false, isOnField: true, goals: 1, assists: 1},
          {playerId: 3, firstName: 'Iago', lastName: 'Robertson-Lavalle', teamId: 11, jerseyNum: 1, position: 'GK', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 4, firstName: 'Leo', lastName: 'Cooley', teamId: 11, jerseyNum: 39, position: 'CDM', isStarter: true, isOnField: true, goals: 0, assists: 1},
          {playerId: 5, firstName: 'Steven', lastName: 'Hadley', teamId: 11, jerseyNum: 13, position: 'CAM', isStarter: true, isOnField: true, goals: 1, assists: 0},
          {playerId: 6, firstName: 'Matt', lastName: 'Christou', teamId: 11, jerseyNum: 7, position: 'RB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 7, firstName: 'Sam', lastName: 'Fuchs', teamId: 11, jerseyNum: 5, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 8, firstName: 'Brian', lastName: 'Finn', teamId: 11, jerseyNum: 2, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 9, firstName: 'Jack', lastName: 'Kielty', teamId: 11, jerseyNum: 15, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 10, firstName: 'Charles', lastName: 'Cadena', teamId: 11, jerseyNum: 8, position: 'CDM', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 11, firstName: 'Will', lastName: 'Stroud', teamId: 11, jerseyNum: 19, position: 'RB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 12, firstName: 'Lukasz', lastName: 'Matviejk', teamId: 11, jerseyNum: 12, position: 'ST', isStarter: false, isOnField: true, goals: 0, assists: 0},
          {playerId: 14, firstName: 'Connor', lastName: 'Dolan', teamId: 11, jerseyNum: 11, position: 'RW', isStarter: false, isOnField: true, goals: 0, assists: 0},
          {playerId: 15, firstName: 'Mark', lastName: 'Forbes', teamId: 11, jerseyNum: 4, position: 'CB', isStarter: false, isOnField: true, goals: 0, assists: 0},
          {playerId: 16, firstName: 'Ivan', lastName: 'Ruiz', teamId: 11, jerseyNum: 11, position: 'CM', isStarter: false, isOnField: true, goals: 0, assists: 0},
          {playerId: 17, firstName: 'Hudson', lastName: 'Lee', teamId: 11, jerseyNum: 17, position: 'LW', isStarter: false, isOnField: true, goals: 0, assists: 0}
        ]
      }, 
      opponentTeam: {id: 18, name: 'Chatham', isFavorite: false, isMyTeam: false, 
        playersGameData: [
          {playerId: 101, firstName: 'Jack', lastName: 'Smith', teamId: '18', jerseyNum: 10, position: 'RB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 102, firstName: 'John', lastName: 'Doe', teamId: '18', jerseyNum: 2, position: 'LB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 103, firstName: 'James', lastName: 'John', teamId: '18', jerseyNum: 26, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 104, firstName: 'Borris', lastName: 'Smith', teamId: '18', jerseyNum: 39, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0}
        ]
      }, 
      isHome: true, myTeamGoals: 3, opponentTeamGoals: 0, isComplete: false
    }
  ]

    return {dashboard, teams, players, games, gameDetails};
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

  genGameDetailsId(gameDetails: GameDetail[]): number {
    return gameDetails.length > 0 ? Math.max(...gameDetails.map(gameDetails => gameDetails.id)) + 1 : 1;
  }
}