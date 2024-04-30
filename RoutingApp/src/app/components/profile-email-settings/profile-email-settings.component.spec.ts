import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmailSettingsComponent } from './profile-email-settings.component';

describe('ProfileEmailSettingsComponent', () => {
  let component: ProfileEmailSettingsComponent;
  let fixture: ComponentFixture<ProfileEmailSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEmailSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileEmailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
