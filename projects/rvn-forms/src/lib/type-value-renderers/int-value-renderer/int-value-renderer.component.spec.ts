import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntValueRendererComponent } from './int-value-renderer.component';

describe('IntValueRendererComponent', () => {
  let component: IntValueRendererComponent;
  let fixture: ComponentFixture<IntValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntValueRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
