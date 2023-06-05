import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidatonComponent } from './reactive-form-validaton.component';

describe('ReactiveFormValidatonComponent', () => {
  let component: ReactiveFormValidatonComponent;
  let fixture: ComponentFixture<ReactiveFormValidatonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormValidatonComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormValidatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
