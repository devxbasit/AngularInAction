import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  selectedProduct: Product;
  products: Product[] = [
    { productId: 1, name: 'Product1', price: 100 },
    { productId: 2, name: 'Product2', price: 200 },
    { productId: 3, name: 'Product3', price: 300 },
    { productId: 4, name: 'Product4', price: 400 },
  ];
  setSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }
}
