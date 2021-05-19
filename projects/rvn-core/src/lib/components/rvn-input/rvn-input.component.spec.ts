import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnInputComponent } from './rvn-input.component';

describe('RvnInputComponent', () => {
  let component: RvnInputComponent;
  let fixture: ComponentFixture<RvnInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
