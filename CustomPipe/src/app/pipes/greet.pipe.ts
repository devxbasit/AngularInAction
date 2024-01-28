import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet',
  standalone: true,
})
export class GreetPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) return value;

    const num = args[0];
    const msg = args[1];

    return num == 1 ? `${msg} ${value}` : `${value} ${msg}`;
  }
}
