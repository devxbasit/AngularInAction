import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLazyComponent } from './settings-lazy.component';

describe('SettingsLazyComponent', () => {
  let component: SettingsLazyComponent;
  let fixture: ComponentFixture<SettingsLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsLazyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
