import { Player } from "./player";

export interface Team {
    id: number;
    name: string;
    players: Player[];
  }