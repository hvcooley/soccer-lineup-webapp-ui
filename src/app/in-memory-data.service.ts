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
        { id: 12, name: 'Gray 7v7 Soccer Heights', isFavorite: false},
        { id: 13, name: 'Georgetown Club Soccer 2021/22', isFavorite: false},
        { id: 14, name: 'PDA Jinky 99/00', isFavorite: false},
        { id: 15, name: 'Torpedoes 00s', isFavorite: false},
        { id: 16, name: 'Napoli Fantasy Team', isFavorite: false},
        { id: 17, name: 'Delbarton Varsity Soccer 2015/16', isFavorite: false},
        { id: 18, name: 'Delbarton Freshman Soccer 2013/14', isFavorite: false}
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
      { id: 12, name: 'Gray 7v7 Soccer Heights', isFavorite: false, isMyTeam: true,
        gameLabelList: [
          {id: 9, date: '2025-02-15', opponentTeamName: 'Chatham', isHome: true, myTeamGoals: 3, opponentTeamGoals: 0}
        ],
      },
      { id: 13, name: 'Georgetown Club Soccer 2021/22', isFavorite: false, isMyTeam: true},
      { id: 14, name: 'PDA Jinky 99/00', isFavorite: false, isMyTeam: true},
      { id: 15, name: 'Torpedoes 00s', isFavorite: false, isMyTeam: true},
      { id: 16, name: 'Napoli Fantasy Team', isFavorite: false, isMyTeam: true},
      { id: 17, name: 'Delbarton Varsity Soccer 2015/16', isFavorite: false, isMyTeam: true},
      { id: 18, name: 'Delbarton Freshman Soccer 2013/14', isFavorite: false, isMyTeam: true}
    ];

  const players = [
    {id: 1, firstName: 'Harrison', lastName: 'Cooley', teamId: 11, jerseyNum: 10, position: 'CF'},
    {id: 2, firstName: 'Eric', lastName: 'Hsieh', teamId: 11, jerseyNum: 21, position: 'LB'},
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
    },
    {id: 9, myTeamId: 12, date: '2025-02-15', actualStartTime: '2025-02-15, 11:49:36 AM', 
      opponentTeam: {id: 18, name: 'Chatham', isFavorite: false, isMyTeaM: false}, 
      players: [
        {id: 101, firstName: 'Jack', lastName: 'Smith', teamId: '18', jerseyNum: 10, position: 'RB'},
        {id: 102, firstName: 'John', lastName: 'Doe', teamId: '18', jerseyNum: 2, position: 'LB'},
        {id: 103, firstName: 'James', lastName: 'John', teamId: '18', jerseyNum: 26, position: 'CB'},
        {id: 104, firstName: 'Borris', lastName: 'Smith', teamId: '18', jerseyNum: 39, position: 'CB'},],
      isHome: true, myTeamGoals: 3, opponentTeamGoals: 0
    }
  ]

  //Dimenions of the field in pixels are width: 800, height: 600
  const gameDetails = [
    {id: 1, date: '2017-09-14', actualStartTime: '2017-09-14, 11:49:36 AM', 
      myTeam: {id: 18, name: 'Delbarton Varsity Soccer 16/17', isFavorite: false, isMyTeam: true, primaryColor: '#032a03', secondaryColor: '#f8f8f8',
        playersGameData: [
          {playerId: 1, firstName: 'Harrison', lastName: 'Cooley', teamId: 11, jerseyNum: 10, position: 'CF', isStarter: true, isOnField: true, goals: 2, assists: 1, circleId: 1, circleXCoord: 400, circleYCoord: 350, 
            notes: ['Great game', 'Powerful shot in minute 26 to bottom right corner narrowly saved', 'Goal in first half was excellent header from corner kick', 'Goal in second half was excellent solo movement to carry ball from halfway through several defenders and finish under pressure']},
          {playerId: 2, firstName: 'Eric', lastName: 'Hsieh', teamId: 11, jerseyNum: 24, position: 'LB', isStarter: true, isOnField: true, goals: 1, assists: 1, circleId: 2, circleXCoord: 100, circleYCoord: 650, notes: ['Solid game']},
          {playerId: 3, firstName: 'Iago', lastName: 'Robertson-Lavalle', teamId: 11, jerseyNum: 1, position: 'GK', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 3, circleXCoord: 400, circleYCoord: 750, notes: ['Solid game']},
          {playerId: 4, firstName: 'Leo', lastName: 'Cooley', teamId: 11, jerseyNum: 39, position: 'CDM', isStarter: true, isOnField: true, goals: 0, assists: 1, circleId: 4, circleXCoord: 400, circleYCoord: 550, notes: ['Solid game']},
          {playerId: 5, firstName: 'Steven', lastName: 'Hadley', teamId: 11, jerseyNum: 13, position: 'CAM', isStarter: true, isOnField: true, goals: 1, assists: 0, circleId: 5, circleXCoord: 300, circleYCoord: 500, notes: ['Solid game']},
          {playerId: 6, firstName: 'Matt', lastName: 'Christou', teamId: 11, jerseyNum: 7, position: 'RB', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 6, circleXCoord: 100, circleYCoord: 400, notes: ['Solid game']},
          {playerId: 7, firstName: 'Sam', lastName: 'Fuchs', teamId: 11, jerseyNum: 5, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 7, circleXCoord: 300, circleYCoord: 650, notes: ['Solid game']},
          {playerId: 8, firstName: 'Brian', lastName: 'Finn', teamId: 11, jerseyNum: 2, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 8, circleXCoord: 500, circleYCoord: 650, notes: ['Solid game']},
          {playerId: 9, firstName: 'Jack', lastName: 'Kielty', teamId: 11, jerseyNum: 15, position: 'CB', isStarter: false, isOnField: false, goals: 0, assists: 0, circleId: 9, circleXCoord: null, circleYCoord: null, notes: ['Solid game']},
          {playerId: 10, firstName: 'Charles', lastName: 'Cadena', teamId: 11, jerseyNum: 8, position: 'CDM', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 10, circleXCoord: 500, circleYCoord: 500, notes: ['Solid game']},
          {playerId: 11, firstName: 'Will', lastName: 'Stroud', teamId: 11, jerseyNum: 18, position: 'RB', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 11, circleXCoord: 700, circleYCoord: 400, notes: ['Solid game']},
          {playerId: 12, firstName: 'Lukasz', lastName: 'Matviejk', teamId: 11, jerseyNum: 19, position: 'ST', isStarter: false, isOnField: false, goals: 0, assists: 0, circleId: 12, circleXCoord: null, circleYCoord: null, notes: ['Solid game']},
          {playerId: 14, firstName: 'Connor', lastName: 'Dolan', teamId: 11, jerseyNum: 14, position: 'RW', isStarter: false, isOnField: false, goals: 0, assists: 0, circleId: 13, circleXCoord: null, circleYCoord: null, notes: ['Solid game']},
          {playerId: 15, firstName: 'Mark', lastName: 'Forbes', teamId: 11, jerseyNum: 12, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 14, circleXCoord: 700, circleYCoord: 650, notes: ['Solid game']},
          {playerId: 16, firstName: 'Ivan', lastName: 'Ruiz', teamId: 11, jerseyNum: 11, position: 'CM', isStarter: false, isOnField: false, goals: 0, assists: 0, circleId: 15, circleXCoord: null, circleYCoord: null, notes: ['Solid game']},
          {playerId: 17, firstName: 'Hudson', lastName: 'Lee', teamId: 11, jerseyNum: 17, position: 'LW', isStarter: false, isOnField: false, goals: 0, assists: 0, circleId: 16, circleXCoord: null, circleYCoord: null, notes: ['Solid game']}
        ]
      }, 
      opponentTeam: {id: 18, name: 'Chatham', isFavorite: false, isMyTeam: false, primaryColor: 'blue', secondaryColor: '#f8f8f8',
        playersGameData: [
          {playerId: 101, firstName: 'Jack', lastName: 'Smith', teamId: '18', jerseyNum: 2, position: 'RB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 102, firstName: 'John', lastName: 'Doe', teamId: '18', jerseyNum: 3, position: 'LB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 103, firstName: 'James', lastName: 'John', teamId: '18', jerseyNum: 4, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 104, firstName: 'Borris', lastName: 'Smith', teamId: '18', jerseyNum: 5, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0}
        ]
      }, 
      isHome: true, myTeamGoals: 3, opponentTeamGoals: 0, isComplete: false
    },

    {id: 9, date: '2025-02-15', actualStartTime: '2025-02-15, 11:49:36 AM', 
      myTeam: {id: 12, name: 'Gray 7v7 Soccer Heights', isFavorite: false, isMyTeam: true, primaryColor: '#525252', secondaryColor: '#f8f8f8',
        playersGameData: [
          {playerId: 1, firstName: 'Harrison', lastName: 'Cooley', teamId: 12, jerseyNum: 10, position: 'LM', isStarter: true, isOnField: true, goals: 2, assists: 1, circleId: 1, circleXCoord: 100, circleYCoord: 450, 
            notes: ['Great game', 'Powerful shot in minute 26 to bottom right corner narrowly saved', 'Goal in first half was excellent header from corner kick', 'Goal in second half was excellent solo movement to carry ball from halfway through several defenders and finish under pressure']},
          {playerId: 2, firstName: 'Eric', lastName: 'Hsieh', teamId: 12, jerseyNum: 24, position: 'RB', isStarter: true, isOnField: true, goals: 1, assists: 1, circleId: 2, circleXCoord: 600, circleYCoord: 600, notes: ['Solid game']},
          {playerId: 12, firstName: 'Lukasz', lastName: 'Matwiejczyk', teamId: 12, jerseyNum: 13, position: 'ST', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 12, circleXCoord: 400, circleYCoord: 350, notes: ['Solid game']},
          {playerId: 19, firstName: 'Alex', lastName: 'Alex', teamId: 12, jerseyNum: 17, position: 'RM', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 12, circleXCoord: 700, circleYCoord: 450, notes: ['Solid game']},
          {playerId: 20, firstName: 'Mark', lastName: 'Chamberlain', teamId: 12, jerseyNum: 6, position: 'CM', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 12, circleXCoord: 400, circleYCoord: 550, notes: ['Solid game']},
          {playerId: 21, firstName: 'Colin', lastName: 'Gregoire', teamId: 12, jerseyNum: 3, position: 'LB', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 12, circleXCoord: 200, circleYCoord: 600, notes: ['Solid game']},
          {playerId: 22, firstName: 'Brendan', lastName: 'Kelly', teamId: 12, jerseyNum: 4, position: 'RB', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 12, circleXCoord: 25, circleYCoord: 25, notes: ['Solid game']},
          {playerId: 23, firstName: 'Mark', lastName: 'Western', teamId: 12, jerseyNum: 5, position: 'CAM', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 12, circleXCoord: 25, circleYCoord: 100, notes: ['Solid game']},
          {playerId: 24, firstName: 'Jeb', lastName: 'Burnell', teamId: 12, jerseyNum: 9, position: 'ST', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 12, circleXCoord: 100, circleYCoord: 25, notes: ['Solid game']},
          {playerId: 25, firstName: 'Pablo', lastName: 'Arias', teamId: 12, jerseyNum: 8, position: 'CM', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 12, circleXCoord: 100, circleYCoord: 100, notes: ['Solid game']},
          {playerId: 26, firstName: 'Goalie', lastName: 'Goalie', teamId: 12, jerseyNum: 1, position: 'GK', isStarter: true, isOnField: true, goals: 0, assists: 0, circleId: 12, circleXCoord: 400, circleYCoord: 750, notes: ['Solid game']},
          {playerId: 27, firstName: 'Michael', lastName: 'Galardi', teamId: 12, jerseyNum: 2, position: 'CB', isStarter: false, isOnField: false, goals: 0, assists: 0, circleId: 12, circleXCoord: null, circleYCoord: null, notes: ['Solid game']},
          {playerId: 28, firstName: 'Tommaso', lastName: 'Angelini', teamId: 12, jerseyNum: 19, position: 'ST', isStarter: false, isOnField: false, goals: 0, assists: 0, circleId: 12, circleXCoord: null, circleYCoord: null, notes: ['Solid game']},
          {playerId: 29, firstName: 'Graham', lastName: 'Graham', teamId: 12, jerseyNum: 21, position: 'RM', isStarter: false, isOnField: false, goals: 0, assists: 0, circleId: 12, circleXCoord: null, circleYCoord: null, notes: ['Solid game']},
          {playerId: 4, firstName: 'Leo', lastName: 'Cooley', teamId: 12, jerseyNum: 39, position: 'CDM', isStarter: false, isOnField: false, goals: 0, assists: 1, circleId: 4, circleXCoord: 100, circleYCoord: 175, notes: ['Solid game']}
        ]
      }, 
      opponentTeam: {id: 18, name: 'Chatham', isFavorite: false, isMyTeam: false, primaryColor: 'blue', secondaryColor: '#f8f8f8',
        playersGameData: [
          {playerId: 101, firstName: 'Jack', lastName: 'Smith', teamId: '18', jerseyNum: 2, position: 'RB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 102, firstName: 'John', lastName: 'Doe', teamId: '18', jerseyNum: 3, position: 'LB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 103, firstName: 'James', lastName: 'John', teamId: '18', jerseyNum: 4, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0},
          {playerId: 104, firstName: 'Borris', lastName: 'Smith', teamId: '18', jerseyNum: 5, position: 'CB', isStarter: true, isOnField: true, goals: 0, assists: 0}
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