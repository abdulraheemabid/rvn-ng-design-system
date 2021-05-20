import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordParentInputRendererComponent } from './record-parent-input-renderer.component';

describe('RecordParentInputRendererComponent', () => {
  let component: RecordParentInputRendererComponent;
  let fixture: ComponentFixture<RecordParentInputRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordParentInputRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordParentInputRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
