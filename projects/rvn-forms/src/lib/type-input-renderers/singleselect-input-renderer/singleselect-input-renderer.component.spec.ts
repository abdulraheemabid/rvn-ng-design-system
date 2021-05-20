import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleselectInputRendererComponent } from './singleselect-input-renderer.component';

describe('SingleselectInputRendererComponent', () => {
  let component: SingleselectInputRendererComponent;
  let fixture: ComponentFixture<SingleselectInputRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleselectInputRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleselectInputRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
