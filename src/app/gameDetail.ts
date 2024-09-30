import { InGameTeamData } from "./inGameTeamData";

export interface GameDetail {
    id: number;
    date: Date,
    actualStartTime: Date,
    myTeam: InGameTeamData,
    opponentTeam: InGameTeamData,
    isHome: boolean,
    isComplete: Boolean
  }