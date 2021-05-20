import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInputRendererComponent } from './string-input-renderer.component';

describe('StringInputRendererComponent', () => {
  let component: StringInputRendererComponent;
  let fixture: ComponentFixture<StringInputRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringInputRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInputRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
