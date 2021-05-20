import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputRendererComponent } from './date-input-renderer.component';

describe('DateInputRendererComponent', () => {
  let component: DateInputRendererComponent;
  let fixture: ComponentFixture<DateInputRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateInputRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
