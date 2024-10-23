import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Circle } from '../Circle';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-test-copy',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestCopyComponent {
  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>; // Corrected selector
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  opponentColor = 'red';
  myTeamColor = 'blue';

  circles: Circle[] = [
    { x: 50, y: 50, radius: 25, isDragging: false, color: 'red' },
    { x: 100, y: 100, radius: 25, isDragging: false, color: 'red' },
  ];

    constructor(
      private route: ActivatedRoute,
      private logger: NGXLogger,
      private location: Location,
    ){}


    ngOnInit(): void {

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
  
    goBack(): void {
      this.location.back();
    }
  
    drawCircle(circle: Circle) {
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
      this.ctx.stroke();
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
