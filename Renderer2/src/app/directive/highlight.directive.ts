import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.element.nativeElement;

    this.renderer.setStyle(nativeElement, 'color', 'white');
    this.renderer.setStyle(nativeElement, 'margin', '10px');
    this.renderer.setAttribute(nativeElement, 'data-parsley-required', 'true');

    if (nativeElement.nodeName.toLowerCase() == 'span') {
      this.renderer.setStyle(nativeElement, 'background-color', 'red');
    } else {
      this.renderer.setStyle(nativeElement, 'background-color', 'green');
    }
  }
}
