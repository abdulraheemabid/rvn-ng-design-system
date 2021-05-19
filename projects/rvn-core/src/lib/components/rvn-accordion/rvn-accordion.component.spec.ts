import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnAccordionComponent } from './rvn-accordion.component';

describe('RvnAccordionComponent', () => {
  let component: RvnAccordionComponent;
  let fixture: ComponentFixture<RvnAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
