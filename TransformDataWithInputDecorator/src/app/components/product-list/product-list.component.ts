import { Component } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products: Product[] = [
    { productId: 1, productName: 'product 1', price: 10 },
    { productId: 2, productName: 'product 2', price: 20 },
  ];
}
