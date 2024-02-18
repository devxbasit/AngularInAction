import {
  Component,
  Input,
  booleanAttribute,
  input,
  numberAttribute,
} from '@angular/core';
import { Product } from '../../interface/product';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, DatePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  @Input({
    required: true,
    transform: (value: Product | null) => ({
      ...value,
      productName: value?.productName.toUpperCase(),
    }),
  })
  product: Product | null = null;

  @Input({ alias: 'displayDetail', required: true }) detail: boolean = true;

  @Input({ transform: numberAttribute }) imageWidth: string | number = 150;

  @Input({ transform: booleanAttribute }) includeImage: string | boolean =
    false;

  @Input({ transform: (value: string) => value.toUpperCase() })
  imageTitle: string = '';

  @Input({ transform: (value: string | number) => new Date(value) })
  availability: string | number | Date = new Date();

  pageTitle = () => {
    return this.product ? `${this.pageTitle}` : `Selected Product Not Found`;
  };
}
