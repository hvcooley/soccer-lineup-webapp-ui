import { Team } from "./team";

export interface GameDetail {
    gameId: number;
    date: Date,
    actualStartTime: Date,
    myTeam: Team,
    opponentTeam: Team,
    isHome: boolean,
    myTeamGoals: number,
    opponentTeamGoals: number,
    isComplete: Boolean,


  }