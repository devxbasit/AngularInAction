import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myNgClass]',
  standalone: true,
})
export class MyNgClassDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() set myNgClass(classes: Object) {
    const classEntries = Object.entries(classes);
    for (const classEntry of classEntries) {
      const [className, classValue] = classEntry;

      if (classValue) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}
