import { TestBed } from '@angular/core/testing';

import { MiniaturesService } from './miniatures.service';

describe('MiniaturesService', () => {
  let service: MiniaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
