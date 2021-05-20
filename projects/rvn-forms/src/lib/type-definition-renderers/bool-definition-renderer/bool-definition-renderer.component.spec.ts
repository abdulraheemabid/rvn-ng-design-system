import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolDefinitionRendererComponent } from './bool-definition-renderer.component';

describe('BoolDefinitionRendererComponent', () => {
  let component: BoolDefinitionRendererComponent;
  let fixture: ComponentFixture<BoolDefinitionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoolDefinitionRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolDefinitionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
