import { TestBed } from '@angular/core/testing';
import { RvnStyleService } from './style.service';


describe('RvnStyleService', () => {
  let service: RvnStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RvnStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
