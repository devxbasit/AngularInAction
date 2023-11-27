import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-font-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './font-preview.component.html',
  styleUrl: './font-preview.component.scss',
})
export class FontPreviewComponent {
  fontSize: number = 14;
  textClass: string = '';
  sampleText: string = 'Sample Text';

  setSampleText(event: any) {
    this.sampleText = event.target.value;
  }

  setFontSize(event: any) {
    this.fontSize = event.target.value;
  }

  setClass(event: any) {
    this.textClass = event.target.value;
  }
}
