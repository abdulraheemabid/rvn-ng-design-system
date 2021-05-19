import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnListComponent } from './rvn-list.component';

describe('RvnListComponent', () => {
  let component: RvnListComponent;
  let fixture: ComponentFixture<RvnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
