import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnMenuComponent } from './rvn-menu.component';

describe('RvnMenuComponent', () => {
  let component: RvnMenuComponent;
  let fixture: ComponentFixture<RvnMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
