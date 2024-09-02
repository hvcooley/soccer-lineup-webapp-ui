
/*
This is the model that represents the data presented on the listed upcoming games and results.
It does not represent the full extent of the game data, only the brief view shown on the button
label within the team detial view.
*/
export interface GameLabel {
    id: number;
    date: Date,
    opponentTeamName: string,
    isHome: boolean,
    myTeamGoals: number,
    opponentTeamGoals: number

  }