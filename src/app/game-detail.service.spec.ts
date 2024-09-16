import { TestBed } from '@angular/core/testing';

import { GameDetailService } from './game-detail.service';

describe('GameDetailService', () => {
  let service: GameDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
