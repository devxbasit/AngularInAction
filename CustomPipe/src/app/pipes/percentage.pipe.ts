import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true,
})
export class PercentagePipe implements PipeTransform {
  transform(value: number, scale: number = 2): string {
    return value.toFixed(scale);
  }
}
