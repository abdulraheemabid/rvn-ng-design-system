import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntDefinitionRendererComponent } from './int-definition-renderer.component';

describe('IntDefinitionRendererComponent', () => {
  let component: IntDefinitionRendererComponent;
  let fixture: ComponentFixture<IntDefinitionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntDefinitionRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntDefinitionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
