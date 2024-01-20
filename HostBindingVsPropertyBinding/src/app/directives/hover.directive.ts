import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective {
  @HostBinding('value') UserMessage: string = 'Value From Directive';
  @HostBinding('title') title: string = 'Title From Directive';
}
