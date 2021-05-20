import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayValuesComponent } from './array-values.component';

describe('ArrayValuesComponent', () => {
  let component: ArrayValuesComponent;
  let fixture: ComponentFixture<ArrayValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
