import { InGamePlayerData } from "./inGamePlayerData";

export interface InGameTeamData {
    teamId: number;
    name: string;
    playersGameData: InGamePlayerData[];
    isMyTeam: boolean;
    color: string;
  }