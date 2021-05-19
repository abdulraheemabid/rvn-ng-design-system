import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnTableComponent } from './rvn-table.component';

describe('RvnTableComponent', () => {
  let component: RvnTableComponent;
  let fixture: ComponentFixture<RvnTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
