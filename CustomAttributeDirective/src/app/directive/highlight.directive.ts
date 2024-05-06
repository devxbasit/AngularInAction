import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    // not safe to use nativeElement - see Renderer2

    const nativeElement: HTMLElement = this.element.nativeElement;

    nativeElement.style.color = 'white';
    nativeElement.style.margin = '10px';
    if (nativeElement.nodeName.toLowerCase() == 'span') {
      nativeElement.style.backgroundColor = 'red';
    } else {
      nativeElement.style.backgroundColor = 'green';
    }
  }
}
