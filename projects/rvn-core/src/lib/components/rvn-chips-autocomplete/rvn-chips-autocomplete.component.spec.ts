import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvnChipsAutocompleteComponent } from './rvn-chips-autocomplete.component';

describe('RvnChipsAutocompleteComponent', () => {
  let component: RvnChipsAutocompleteComponent;
  let fixture: ComponentFixture<RvnChipsAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvnChipsAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvnChipsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
