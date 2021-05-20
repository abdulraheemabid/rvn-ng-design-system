import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateValueRendererComponent } from './date-value-renderer.component';

describe('DateValueRendererComponent', () => {
  let component: DateValueRendererComponent;
  let fixture: ComponentFixture<DateValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateValueRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
