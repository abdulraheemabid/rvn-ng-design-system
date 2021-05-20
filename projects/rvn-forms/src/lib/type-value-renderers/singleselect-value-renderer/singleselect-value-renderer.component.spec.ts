import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleselectValueRendererComponent } from './singleselect-value-renderer.component';

describe('SingleselectValueRendererComponent', () => {
  let component: SingleselectValueRendererComponent;
  let fixture: ComponentFixture<SingleselectValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleselectValueRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleselectValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
