import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResponseMessageComponent } from './api-response-message.component';

describe('ApiResponseMessageComponent', () => {
  let component: ApiResponseMessageComponent;
  let fixture: ComponentFixture<ApiResponseMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiResponseMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiResponseMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
