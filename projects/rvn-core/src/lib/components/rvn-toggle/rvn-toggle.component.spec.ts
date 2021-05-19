import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnToggleComponent } from './rvn-toggle.component';

describe('RvnToggleComponent', () => {
  let component: RvnToggleComponent;
  let fixture: ComponentFixture<RvnToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
