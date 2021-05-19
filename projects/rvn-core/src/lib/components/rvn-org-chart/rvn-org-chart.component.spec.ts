import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnOrgChartComponent } from './rvn-org-chart.component';

describe('RvnOrgChartComponent', () => {
  let component: RvnOrgChartComponent;
  let fixture: ComponentFixture<RvnOrgChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnOrgChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnOrgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
