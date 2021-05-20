import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatInputRendererComponent } from './float-input-renderer.component';

describe('FloatInputRendererComponent', () => {
  let component: FloatInputRendererComponent;
  let fixture: ComponentFixture<FloatInputRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatInputRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatInputRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
