import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnToolbarComponent } from './rvn-toolbar.component';

describe('RvnToolbarComponent', () => {
  let component: RvnToolbarComponent;
  let fixture: ComponentFixture<RvnToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
