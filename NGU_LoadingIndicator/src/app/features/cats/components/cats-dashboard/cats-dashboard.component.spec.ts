import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsDashboardComponent } from './cats-dashboard.component';

describe('CatsDashboardComponent', () => {
  let component: CatsDashboardComponent;
  let fixture: ComponentFixture<CatsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsDashboardComponent]
    });
    fixture = TestBed.createComponent(CatsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
