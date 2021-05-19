import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnDividerComponent } from './rvn-divider.component';

describe('RvnDividerComponent', () => {
  let component: RvnDividerComponent;
  let fixture: ComponentFixture<RvnDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
