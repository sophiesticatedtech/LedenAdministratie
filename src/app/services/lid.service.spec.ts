import { TestBed } from '@angular/core/testing';

import { LidService } from './lid.service';

describe('LidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LidService = TestBed.get(LidService);
    expect(service).toBeTruthy();
  });
});
