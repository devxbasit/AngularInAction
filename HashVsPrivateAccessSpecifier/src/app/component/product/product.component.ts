import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productService: ProductService = inject(ProductService);

  ngOnInit(): void {
    console.clear();
    for (let p in this.productService) {
      console.log(`Properties of productService: ${p}`);
    }

    console.log('*********Url After Attack');

    this.productService['productUrl1'] = 'api/nefarious';

    // truly private - Property '#productUrl2' does not exist on type 'ProductService'.
    // this.productService['#productUrl2'] = 'api/nefarious';

    this.productService.logUrl1();
    this.productService.logUrl2();
  }
}
