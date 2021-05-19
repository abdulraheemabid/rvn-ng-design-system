import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnDatepickerComponent } from './rvn-datepicker.component';

describe('RvnDatepickerComponent', () => {
  let component: RvnDatepickerComponent;
  let fixture: ComponentFixture<RvnDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
