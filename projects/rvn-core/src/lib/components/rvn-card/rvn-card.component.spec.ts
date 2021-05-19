import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnCardComponent } from './rvn-card.component';

describe('RvnCardComponent', () => {
  let component: RvnCardComponent;
  let fixture: ComponentFixture<RvnCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
