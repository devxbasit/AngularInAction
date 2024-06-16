import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cats',
    loadChildren: () =>
      import('./features/cats/cats.module').then((m) => m.CatsModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [],
  providers: [RouterModule],
})
export class AppRoutingModule {}
