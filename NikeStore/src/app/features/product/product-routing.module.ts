import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';

const routes: Routes = [
  { path: '', component: ViewProductsComponent },
  { path: ':id', component: ViewProductComponent },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class ProductRoutingModule {}
