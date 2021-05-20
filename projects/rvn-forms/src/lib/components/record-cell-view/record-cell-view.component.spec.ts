import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCellViewComponent } from './record-cell-view.component';

describe('RecordCellViewComponent', () => {
  let component: RecordCellViewComponent;
  let fixture: ComponentFixture<RecordCellViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordCellViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordCellViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
