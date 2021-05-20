import { TestBed } from '@angular/core/testing';

import { TypeMetaService } from './type-meta.service';

describe('TypeMetaService', () => {
  let service: TypeMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
