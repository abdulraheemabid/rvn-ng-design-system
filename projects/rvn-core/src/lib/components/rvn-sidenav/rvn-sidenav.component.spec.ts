import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnSidenavComponent } from './rvn-sidenav.component';

describe('RvnSidenavComponent', () => {
  let component: RvnSidenavComponent;
  let fixture: ComponentFixture<RvnSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
