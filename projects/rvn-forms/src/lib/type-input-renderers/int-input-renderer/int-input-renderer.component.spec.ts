import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntInputRendererComponent } from './int-input-renderer.component';

describe('IntInputRendererComponent', () => {
  let component: IntInputRendererComponent;
  let fixture: ComponentFixture<IntInputRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntInputRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntInputRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
