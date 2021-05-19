import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnConfirmDialogComponent } from './rvn-confirm-dialog.component';

describe('RvnConfirmDialogComponent', () => {
  let component: RvnConfirmDialogComponent;
  let fixture: ComponentFixture<RvnConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
