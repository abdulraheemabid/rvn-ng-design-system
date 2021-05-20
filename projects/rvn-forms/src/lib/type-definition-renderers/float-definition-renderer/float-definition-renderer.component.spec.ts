import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatDefinitionRendererComponent } from './float-definition-renderer.component';

describe('FloatDefinitionRendererComponent', () => {
  let component: FloatDefinitionRendererComponent;
  let fixture: ComponentFixture<FloatDefinitionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatDefinitionRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatDefinitionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
