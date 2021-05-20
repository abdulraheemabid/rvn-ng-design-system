import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUiControlComponent } from './choose-ui-control.component';

describe('ChooseUiControlComponent', () => {
  let component: ChooseUiControlComponent;
  let fixture: ComponentFixture<ChooseUiControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseUiControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseUiControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
