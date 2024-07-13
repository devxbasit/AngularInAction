import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { InventoryHomeComponent } from './components/inventory-home/inventory-home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ProductsComponent } from './components/products/products.component';
import { StockEntryComponent } from './components/stock-entry/stock-entry.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: InventoryHomeComponent },
      { path: 'stock-entry', component: StockEntryComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
