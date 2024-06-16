import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './components/cat/cat.component';
import { CatsDashboardComponent } from './components/cats-dashboard/cats-dashboard.component';
import { catResolver } from 'src/app/core/resolver/cat.resolver';

const routes: Routes = [
  {
    path: '',
    component: CatsDashboardComponent,
  },
  {
    path: ':id',
    component: CatComponent,
    resolve: { cat: catResolver },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CatsRoutingModule {}
