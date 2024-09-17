import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameDetail } from '../gameDetail';
import { GameDetailService } from '../game-detail.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent implements OnInit{
  
  gameDetail: GameDetail | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameDetailService: GameDetailService,
    private logger: NGXLogger,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getGameDetailData()
    this.logger.info('GameDetail fetched with gameId: {}', this.gameDetail?.id)
  }

  getGameDetailData(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameDetailService.getGameDetail(id)
      .subscribe(gameDetail => this.gameDetail = gameDetail)
  }

  goBack(): void {
    this.location.back();
  }

}
