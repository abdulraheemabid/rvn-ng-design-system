import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseValueRendererComponent } from './base-value-renderer.component';

describe('BaseValueRendererComponent', () => {
  let component: BaseValueRendererComponent;
  let fixture: ComponentFixture<BaseValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseValueRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
