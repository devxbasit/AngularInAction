import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective {
  constructor(private element: ElementRef, private rendered: Renderer2) {}

  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @HostListener('mouseenter') onMouseOver() {
    this.rendered.removeClass(this.element.nativeElement, 'color-primary');
    this.border = '2px solid red';
  }

  @HostListener('mouseleave') OnMouseOut() {
    this.rendered.addClass(this.element.nativeElement, 'color-primary');
    this.border = 'none';
  }
}
