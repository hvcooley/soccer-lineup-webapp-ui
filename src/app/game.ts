import { Team } from "./team";

export interface Game {
    id: number;
    myTeamId: number; //This is the foreign key tying the game to the team
    date: Date,
    actualStartTime: Date,
    myTeam: Team,
    opponentTeam: Team,
    isHome: boolean,
    myTeamGoals: number,
    opponentTeamGoals: number

  }