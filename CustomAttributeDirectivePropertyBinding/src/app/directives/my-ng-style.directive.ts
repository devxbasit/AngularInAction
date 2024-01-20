import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myNgStyle]',
  standalone: true,
})
export class MyNgStyleDirective implements OnInit {
  @Input() backgroundColor: string = '';
  @Input('myNgStyle') style: { color: string; border: string } = {
    color: '',
    border: '',
  };

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      this.style.color
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'border',
      this.style.border
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.backgroundColor
    );
  }
}
