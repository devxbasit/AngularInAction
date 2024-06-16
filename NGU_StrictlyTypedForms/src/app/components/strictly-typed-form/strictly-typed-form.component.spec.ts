import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrictlyTypedFormComponent } from './strictly-typed-form.component';

describe('StrictlyTypedFormComponent', () => {
  let component: StrictlyTypedFormComponent;
  let fixture: ComponentFixture<StrictlyTypedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrictlyTypedFormComponent]
    });
    fixture = TestBed.createComponent(StrictlyTypedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
