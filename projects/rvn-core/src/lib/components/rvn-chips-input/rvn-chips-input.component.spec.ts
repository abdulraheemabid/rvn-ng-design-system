import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnChipsInputComponent } from './rvn-chips-input.component';

describe('RvnChipsInputComponent', () => {
  let component: RvnChipsInputComponent;
  let fixture: ComponentFixture<RvnChipsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnChipsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnChipsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
