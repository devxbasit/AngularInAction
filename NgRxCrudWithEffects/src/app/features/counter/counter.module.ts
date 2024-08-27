import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterDashboardComponent } from './components/counter-dashboard/counter-dashboard.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterRoutingModule } from './counter-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CounterDashboardComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [CounterRoutingModule],
})
export class CounterModule {}
