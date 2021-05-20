import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordParentValueRendererComponent } from './record-parent-value-renderer.component';

describe('RecordParentValueRendererComponent', () => {
  let component: RecordParentValueRendererComponent;
  let fixture: ComponentFixture<RecordParentValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordParentValueRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordParentValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
