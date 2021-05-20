import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringDefinitionRendererComponent } from './string-definition-renderer.component';

describe('StringDefinitionRendererComponent', () => {
  let component: StringDefinitionRendererComponent;
  let fixture: ComponentFixture<StringDefinitionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringDefinitionRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringDefinitionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
