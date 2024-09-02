import { GameLabel } from "./gameLabel";
import { Player } from "./player";

export interface Team {
    id: number;
    name: string;
    players: Player[];
    isFavorite: boolean;
    isMyTeam: boolean;
    gameLabelList: GameLabel[]
  }