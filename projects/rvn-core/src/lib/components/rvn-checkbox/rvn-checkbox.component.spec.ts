import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnCheckboxComponent } from './rvn-checkbox.component';

describe('RvnCheckboxComponent', () => {
  let component: RvnCheckboxComponent;
  let fixture: ComponentFixture<RvnCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
