import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameDetail } from '../gameDetail';
import { GameDetailService } from '../game-detail.service';
import { NGXLogger } from 'ngx-logger';
import { Circle } from '../Circle';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html', // Use this template file
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>; // Corrected selector
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  gameDetail: GameDetail | undefined;

  opponentColor = 'red';
  myTeamColor = 'blue';

  circles: Circle[] = [
    { x: 50, y: 50, radius: 25, isDragging: false, color: 'red' },
    { x: 100, y: 100, radius: 25, isDragging: false, color: 'red' },
  ];

  constructor(
    private route: ActivatedRoute,
    private gameDetailService: GameDetailService,
    private logger: NGXLogger,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getGameDetailData();
    this.logger.info('GameDetail fetched with gameId: {}', this.gameDetail?.id);
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
  }

  getGameDetailData(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameDetailService.getGameDetail(id)
      .subscribe(gameDetail => {
        this.gameDetail = gameDetail;
        this.myTeamColor = gameDetail.myTeam.color;
        this.opponentColor = gameDetail.opponentTeam.color;
      });
  }

  goBack(): void {
    this.location.back();
  }

  drawCircle(circle: Circle) {
    this.ctx.beginPath();
    this.ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = circle.color; // Set the fill color
    this.ctx.fill(); // Fill the circle with the specified color
    this.ctx.stroke(); // Optionally, stroke the outline of the circle
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
