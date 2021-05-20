import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolInputRendererComponent } from './bool-input-renderer.component';

describe('BoolInputRendererComponent', () => {
  let component: BoolInputRendererComponent;
  let fixture: ComponentFixture<BoolInputRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoolInputRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolInputRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
