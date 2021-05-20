import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDefinitionRendererComponent } from './date-definition-renderer.component';

describe('DateDefinitionRendererComponent', () => {
  let component: DateDefinitionRendererComponent;
  let fixture: ComponentFixture<DateDefinitionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDefinitionRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDefinitionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
