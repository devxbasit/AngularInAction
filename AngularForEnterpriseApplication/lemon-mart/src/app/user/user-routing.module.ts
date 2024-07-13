import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserResolver } from './resolvers/user.resolve';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  {
    path: 'profile/:userId',
    component: ProfileComponent,
    resolve: {
      user: UserResolver,
    },
    canActivate: [authGuard],
  },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
