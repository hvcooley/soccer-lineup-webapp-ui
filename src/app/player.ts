export interface Player {
    id: number;
    firstName: string;
    lastName: string;
    teamId: number; //eventually should change this so one player can be on multiple teams. One to many rel. for player to team
    jerseyNum: number;
    position: String;
  }