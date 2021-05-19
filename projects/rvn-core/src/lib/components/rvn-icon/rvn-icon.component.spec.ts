import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnIconComponent } from './rvn-icon.component';

describe('RvnIconComponent', () => {
  let component: RvnIconComponent;
  let fixture: ComponentFixture<RvnIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
