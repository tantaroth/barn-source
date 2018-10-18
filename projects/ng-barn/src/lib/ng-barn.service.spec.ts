import { TestBed } from '@angular/core/testing';

import { NgBarnService } from './ng-barn.service';

describe('NgBarnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBarnService = TestBed.get(NgBarnService);
    expect(service).toBeTruthy();
  });
});
