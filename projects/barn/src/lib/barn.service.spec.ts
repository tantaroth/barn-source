import { TestBed } from '@angular/core/testing';

import { BarnService } from './barn.service';

describe('BarnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarnService = TestBed.get(BarnService);
    expect(service).toBeTruthy();
  });
});
