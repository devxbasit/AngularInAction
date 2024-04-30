import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsLazyComponent } from './account-settings-lazy.component';

describe('AccountSettingsLazyComponent', () => {
  let component: AccountSettingsLazyComponent;
  let fixture: ComponentFixture<AccountSettingsLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSettingsLazyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountSettingsLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
