import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CounterDashboardComponent } from './components/counter-dashboard/counter-dashboard.component';

const routes: Routes = [
  {
    path: 'counter',
    children: [
      {
        path: '',
        component: CounterDashboardComponent,
      },
    ],
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class CounterRoutingModule {}
