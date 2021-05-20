import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDeleteConfirmComponent } from './record-delete-confirm.component';

describe('RecordDeleteConfirmComponent', () => {
  let component: RecordDeleteConfirmComponent;
  let fixture: ComponentFixture<RecordDeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordDeleteConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
