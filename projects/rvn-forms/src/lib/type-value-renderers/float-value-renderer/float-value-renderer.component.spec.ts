import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatValueRendererComponent } from './float-value-renderer.component';

describe('FloatValueRendererComponent', () => {
  let component: FloatValueRendererComponent;
  let fixture: ComponentFixture<FloatValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatValueRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
