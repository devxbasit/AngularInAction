import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoadingIndicatorComponent],
  exports: [LoadingIndicatorComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class SharedModule {}
