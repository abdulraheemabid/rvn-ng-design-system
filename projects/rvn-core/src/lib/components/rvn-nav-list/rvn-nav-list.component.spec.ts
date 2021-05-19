import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnNavListComponent } from './rvn-nav-list.component';

describe('RvnNavListComponent', () => {
  let component: RvnNavListComponent;
  let fixture: ComponentFixture<RvnNavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnNavListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
