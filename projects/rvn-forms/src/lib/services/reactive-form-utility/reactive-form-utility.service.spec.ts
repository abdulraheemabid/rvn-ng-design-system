import { TestBed } from '@angular/core/testing';

import { ReactiveFormUtilityService } from './reactive-form-utility.service';

describe('ReactiveFormUtilityService', () => {
  let service: ReactiveFormUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveFormUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
