import { TestBed } from '@angular/core/testing';

import { RvnSnackBarService } from './snack-bar.service';

describe('RvnSnackBarService', () => {
  let service: RvnSnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RvnSnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
