import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnRadioComponent } from './rvn-radio.component';

describe('RvnRadioComponent', () => {
  let component: RvnRadioComponent;
  let fixture: ComponentFixture<RvnRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
