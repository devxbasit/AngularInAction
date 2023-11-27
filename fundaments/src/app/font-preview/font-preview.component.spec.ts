import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontPreviewComponent } from './font-preview.component';

describe('FontPreviewComponent', () => {
  let component: FontPreviewComponent;
  let fixture: ComponentFixture<FontPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FontPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
