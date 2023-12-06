import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product: Product = {
    ProductName: '',
    ProductPrice: 0,
    ProductQuantity: 0,
  };

  @Output() UpdateCartEvent = new EventEmitter<any>();

  isAddedToCart: boolean = false;

  IncreaseQuantity() {
    this.product.ProductQuantity++;
  }

  DecreaseQuantity() {
    if (this.product.ProductQuantity > 1) {
      this.product.ProductQuantity--;
    }
  }

  UpdateCartStatus() {
    this.isAddedToCart = !this.isAddedToCart;

    const payload = { isAddToCart: this.isAddedToCart, product: this.product };

    this.UpdateCartEvent.emit(payload);
  }
}
