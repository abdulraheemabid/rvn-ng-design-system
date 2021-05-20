import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDefinitionRendererComponent } from './base-definition-renderer.component';

describe('BaseDefinitionRendererComponent', () => {
  let component: BaseDefinitionRendererComponent;
  let fixture: ComponentFixture<BaseDefinitionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDefinitionRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDefinitionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
