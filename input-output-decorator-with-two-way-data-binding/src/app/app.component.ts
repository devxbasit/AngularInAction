import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'InputOutputDecorator-with-two-way-data-binding';
  quantity: number = 0;

  addQuantity(quantity: string) {
    this.quantity = parseInt(quantity);
  }

  updateQuantity(quantity: number) {
    this.quantity = quantity;
  }
}
