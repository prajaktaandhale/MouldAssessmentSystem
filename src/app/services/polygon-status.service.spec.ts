import { TestBed } from '@angular/core/testing';

import { PolygonStatusService } from './polygon-status.service';

describe('PolygonStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolygonStatusService = TestBed.get(PolygonStatusService);
    expect(service).toBeTruthy();
  });
});
