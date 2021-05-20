import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleselectDefinitionRendererComponent } from './singleselect-definition-renderer.component';

describe('SingleselectDefinitionRendererComponent', () => {
  let component: SingleselectDefinitionRendererComponent;
  let fixture: ComponentFixture<SingleselectDefinitionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleselectDefinitionRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleselectDefinitionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
