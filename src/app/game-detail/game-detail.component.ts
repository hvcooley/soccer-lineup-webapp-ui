import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameDetail } from '../gameDetail';
import { GameDetailService } from '../game-detail.service';
import { NGXLogger } from 'ngx-logger';
import { Circle } from '../Circle';
import { FIELD_PIXEL_HEIGHT, FIELD_PIXEL_WIDTH } from '../constants';
import { InGamePlayerData } from '../inGamePlayerData';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html', // Use this template file
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent implements OnInit, AfterViewInit {

  readonly gameDetailFieldWidth = FIELD_PIXEL_WIDTH;
  readonly gameDetailFieldHeight = FIELD_PIXEL_HEIGHT;

  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>; // Corrected selector
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  gameDetail: GameDetail | undefined;
  myTeamPlayersOnField: InGamePlayerData[] = [];
  myTeamPlayersOnBench: InGamePlayerData[] = [];
  opponentTeamPlayersOnField: InGamePlayerData[] = [];
  opponentTeamPlayersOnBench: InGamePlayerData[] = [];

  opponentColor = 'red';
  myTeamColor = 'blue';

  circles: Circle[] = [];

  constructor(
    private route: ActivatedRoute,
    private gameDetailService: GameDetailService,
    private logger: NGXLogger,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getGameDetailData();
    this.logger.info(`GameDetail fetched with gameId: ${this.gameDetail?.id}`);
    this.logger.info('GameDetail data: {}', this.gameDetail);
  }

  ngAfterViewInit(): void {
    // Now, after the view has been initialized, we can safely access the canvas
    this.canvas = this.canvasRef.nativeElement; // Correct canvas access
    this.ctx = this.canvas.getContext("2d")!;

    let draggingCircle: Circle | null = null;

    this.canvas.addEventListener("mousedown", (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      draggingCircle = this.getCircleAt(x, y);
      if (draggingCircle) {
        draggingCircle.isDragging = true;
      }
    });

    this.canvas.addEventListener("mousemove", (e) => {
      if (draggingCircle) {
        draggingCircle.x = e.offsetX;
        draggingCircle.y = e.offsetY;
        this.drawCircles();
      }
    });

    this.canvas.addEventListener("mouseup", () => {
      if (draggingCircle) {
        draggingCircle.isDragging = false;
        draggingCircle = null;
      }
    });

    this.drawCircles();

    this.logger.info(`The circles list contains ${this.circles.length} circles`);

  }

  getGameDetailData(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameDetailService.getGameDetail(id)
      .subscribe(gameDetail => {
        this.gameDetail = gameDetail;
        this.myTeamColor = gameDetail.myTeam.primaryColor;
        this.opponentColor = gameDetail.opponentTeam.primaryColor;
        this.myTeamPlayersOnField = gameDetail.myTeam.playersGameData.filter(player => player.isOnField);
        this.myTeamPlayersOnBench = gameDetail.myTeam.playersGameData.filter(player => player.isOnField === false)
        this.opponentTeamPlayersOnField = gameDetail.opponentTeam.playersGameData.filter(player => player.isOnField);
        this.opponentTeamPlayersOnBench = gameDetail.opponentTeam.playersGameData.filter(player => player.isOnField === false)

        // Now that the gameDetail data is available, populate the circles array
        for (const player of this.gameDetail.myTeam.playersGameData) {
          if (player.isOnField == true) {
            const playerCircle: Circle = { x: player.circleXCoord, y: player.circleYCoord, radius: 20, isDragging: false, 
              primaryColor: this.myTeamColor, secondaryColor: gameDetail.myTeam.secondaryColor, numberDisplayed: player.jerseyNum, playerLastName: player.lastName };
            this.circles.push(playerCircle);
          }
        }

        // Draw circles after they've been initialized
        this.drawCircles();

        // Log the number of circles
        this.logger.info(`The circles list now contains ${this.circles.length} circles after gameDetail is loaded`);
      });
  }


  goBack(): void {
    this.location.back();
  }

  increaseGoals(): void {
    this.logger.info('Adding a goal to player _____')
  }

  decreaseGoals(): void {
    this.logger.info('Removing a goal from player _____')
  }

  drawCircle(circle: Circle) {
    // Draw the circle
    this.ctx.beginPath();
    this.ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = circle.primaryColor; // Set the fill color
    this.ctx.fill(); // Fill the circle with the specified color
    this.ctx.stroke(); // Optionally, stroke the outline of the circle

    // Draw the player’s number inside the circle
    this.ctx.fillStyle = circle.secondaryColor; // Set the text color
    this.ctx.font = `${circle.radius * 0.8}px Arial`; // Adjust font size based on circle size
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(circle.numberDisplayed.toString(), circle.x, circle.y);

    // Draw the player's name below the circle
    const textYPosition = circle.y + circle.radius + 10; // Position below the circle
    this.ctx.font = `${circle.radius * 0.5}px Arial`; // Smaller font for the name
    this.ctx.fillStyle = circle.secondaryColor; // Set the text color for the name
    this.ctx.fillText(circle.playerLastName, circle.x, textYPosition);
}

  drawCircles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.circles.forEach(circle => this.drawCircle(circle)); // Use arrow function to maintain 'this' context
  }

  getCircleAt(x: number, y: number): Circle | null {
    for (const circle of this.circles) {
      if (Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2) < circle.radius) {
        return circle;
      }
    }
    return null;
  }
}
