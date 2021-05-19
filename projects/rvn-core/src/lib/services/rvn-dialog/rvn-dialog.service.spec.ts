import { TestBed } from '@angular/core/testing';

import { RvnDialogService } from './rvn-dialog.service';

describe('RvnDialogService', () => {
  let service: RvnDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RvnDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
