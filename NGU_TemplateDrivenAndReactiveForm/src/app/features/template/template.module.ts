import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenFormComponent,
  },
];

@NgModule({
  declarations: [TemplateDrivenFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
})
export class TemplateModule {}
