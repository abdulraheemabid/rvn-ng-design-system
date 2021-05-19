import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnChipsComponent } from './rvn-chips.component';

describe('RvnChipsComponent', () => {
  let component: RvnChipsComponent;
  let fixture: ComponentFixture<RvnChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
