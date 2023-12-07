import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'InputOutputDecorator-with-ngfor-mini-task';
  products: Product[] = [
    { ProductName: 'Pen', ProductPrice: 10, ProductQuantity: 1 },
    { ProductName: 'mouse', ProductPrice: 500, ProductQuantity: 1 },
    { ProductName: 'Laptop', ProductPrice: 25000, ProductQuantity: 1 },
  ];

  cartBucket: Product[] = [];

  updateCartBucket(payload: any) {
    if (payload.isAddToCart) {
      this.cartBucket.push(payload.product);
    } else {
      this.cartBucket = this.cartBucket.filter(
        (product) => product.ProductName != payload.product.ProductName
      );
    }
  }

  calculatePayableAmount() {
    let netAmount = 0;

    this.cartBucket.forEach((product) => {
      netAmount += product.ProductPrice * product.ProductQuantity;
    });

    return netAmount;
  }
}
