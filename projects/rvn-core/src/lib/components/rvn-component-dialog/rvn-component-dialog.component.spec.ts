import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnComponentDialogComponent } from './rvn-component-dialog.component';

describe('RvnComponentDialogComponent', () => {
  let component: RvnComponentDialogComponent;
  let fixture: ComponentFixture<RvnComponentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnComponentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnComponentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
