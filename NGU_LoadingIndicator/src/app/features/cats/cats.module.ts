import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsRoutingModule } from './cats-routing.module';
import { CatsDashboardComponent } from './components/cats-dashboard/cats-dashboard.component';
import { CatComponent } from './components/cat/cat.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CatsDashboardComponent,
    CatComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [CatsRoutingModule],
})
export class CatsModule {}
