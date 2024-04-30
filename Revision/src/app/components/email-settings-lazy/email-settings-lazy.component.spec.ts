import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSettingsLazyComponent } from './email-settings-lazy.component';

describe('EmailSettingsLazyComponent', () => {
  let component: EmailSettingsLazyComponent;
  let fixture: ComponentFixture<EmailSettingsLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSettingsLazyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailSettingsLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
