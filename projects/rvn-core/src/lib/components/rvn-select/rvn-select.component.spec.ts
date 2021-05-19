import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnSelectComponent } from './rvn-select.component';

describe('RvnSelectComponent', () => {
  let component: RvnSelectComponent;
  let fixture: ComponentFixture<RvnSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
