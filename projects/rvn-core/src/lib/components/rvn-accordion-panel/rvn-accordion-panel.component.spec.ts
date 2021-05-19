import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnAccordionPanelComponent } from './rvn-accordion-panel.component';

describe('RvnAccordionPanelComponent', () => {
  let component: RvnAccordionPanelComponent;
  let fixture: ComponentFixture<RvnAccordionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnAccordionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnAccordionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
