import { NgModule } from '@angular/core';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { UpsertProductsComponent } from './components/view-product/upsert-products/upsert-products.component';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UpsertProductsComponent,
    ViewProductsComponent,
    ViewProductComponent,
  ],
  imports: [],
  exports: [ProductRoutingModule],
  providers: [],
})
export class ProductModule {}
