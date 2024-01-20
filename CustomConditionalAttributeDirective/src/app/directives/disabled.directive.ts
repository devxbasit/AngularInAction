import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disabled]',
  standalone: true,
})
export class DisabledDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() set disabled(value: boolean) {
    if (value) {
      this.renderer.addClass(this.element.nativeElement, 'disabled');
    }
  }
}
