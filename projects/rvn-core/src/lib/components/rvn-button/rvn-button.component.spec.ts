import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnButtonComponent } from './rvn-button.component';

describe('RvnButtonComponent', () => {
  let component: RvnButtonComponent;
  let fixture: ComponentFixture<RvnButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
