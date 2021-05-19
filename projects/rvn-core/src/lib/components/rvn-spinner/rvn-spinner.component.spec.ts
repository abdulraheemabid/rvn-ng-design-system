import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnSpinnerComponent } from './rvn-spinner.component';

describe('RvnSpinnerComponent', () => {
  let component: RvnSpinnerComponent;
  let fixture: ComponentFixture<RvnSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
