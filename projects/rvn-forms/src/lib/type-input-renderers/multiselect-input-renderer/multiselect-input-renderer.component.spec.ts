import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectInputRendererComponent } from './multiselect-input-renderer.component';

describe('MultiselectInputRendererComponent', () => {
  let component: MultiselectInputRendererComponent;
  let fixture: ComponentFixture<MultiselectInputRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectInputRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectInputRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
