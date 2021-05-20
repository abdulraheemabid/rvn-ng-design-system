import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringValueRendererComponent } from './string-value-renderer.component';

describe('StringValueRendererComponent', () => {
  let component: StringValueRendererComponent;
  let fixture: ComponentFixture<StringValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringValueRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
