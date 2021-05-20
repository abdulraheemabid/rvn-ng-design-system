import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputRendererComponent } from './base-input-renderer.component';

describe('BaseInputRendererComponent', () => {
  let component: BaseInputRendererComponent;
  let fixture: ComponentFixture<BaseInputRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInputRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInputRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
