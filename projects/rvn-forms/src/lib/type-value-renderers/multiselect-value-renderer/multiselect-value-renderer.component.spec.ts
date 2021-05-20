import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectValueRendererComponent } from './multiselect-value-renderer.component';

describe('MultiselectValueRendererComponent', () => {
  let component: MultiselectValueRendererComponent;
  let fixture: ComponentFixture<MultiselectValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectValueRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
