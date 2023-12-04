import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() quantity: number = 0;
  @Output() quantityChange = new EventEmitter<number>();

  price: number = 10;

  increaseQuantity() {
    this.quantity++;
    this.updateQuantity();
  }

  decreaseQuantity() {
    if (this.quantity == 0) return;
    this.quantity--;
    this.updateQuantity();
  }

  updateQuantity() {
    this.quantityChange.emit(this.quantity);
  }
}
