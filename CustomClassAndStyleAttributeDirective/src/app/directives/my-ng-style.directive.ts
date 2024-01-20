import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myNgStyle]',
  standalone: true,
})
export class MyNgStyleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() set myNgStyle(styles: Object) {
    const styleEntries = Object.entries(styles);
    for (const styleEntry of styleEntries) {
      const [styleKey, styleValue] = styleEntry;
      this.renderer.setStyle(this.element.nativeElement, styleKey, styleValue);
    }
  }
}
