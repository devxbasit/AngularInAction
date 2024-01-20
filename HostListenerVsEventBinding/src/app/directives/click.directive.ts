import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]',
  standalone: true,
})
export class ClickDirective {
  @HostListener('click') onButtonClick() {
    alert('Hello from directive');
  }
}
