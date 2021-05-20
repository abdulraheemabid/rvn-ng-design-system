import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolValueRendererComponent } from './bool-value-renderer.component';

describe('BoolValueRendererComponent', () => {
  let component: BoolValueRendererComponent;
  let fixture: ComponentFixture<BoolValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoolValueRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
