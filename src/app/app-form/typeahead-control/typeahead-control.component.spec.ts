import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadControlComponent } from './typeahead-control.component';

describe('TypeaheadControlComponent', () => {
  let component: TypeaheadControlComponent;
  let fixture: ComponentFixture<TypeaheadControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeaheadControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
