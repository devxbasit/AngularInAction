import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DisabledDirective } from './directives/disabled.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DisabledDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CustomConditionalAttributeDirective';
  products: any = [
    { name: 'product 1', isInStock: false },
    { name: 'product 2', isInStock: true },
    { name: 'product 3', isInStock: false },
    { name: 'product 4', isInStock: true },
    { name: 'product 5', isInStock: false },
  ];
}
