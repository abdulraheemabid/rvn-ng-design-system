import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectDefinitionRendererComponent } from './multiselect-definition-renderer.component';

describe('MultiselectDefinitionRendererComponent', () => {
  let component: MultiselectDefinitionRendererComponent;
  let fixture: ComponentFixture<MultiselectDefinitionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectDefinitionRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectDefinitionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
