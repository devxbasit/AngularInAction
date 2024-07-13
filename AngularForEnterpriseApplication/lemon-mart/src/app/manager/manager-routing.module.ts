import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from '../auth/enums/auth.enum';
import { authGuard } from '../auth/guards/auth.guard';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ReceiptLookupComponent } from './components/receipt-lookup/receipt-lookup.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { ViewUserComponent } from '../user/components/view-user/view-user.component';
import { UserResolver } from '../user/resolvers/user.resolve';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: ManagerHomeComponent,
        canActivate: [authGuard],
        data: {
          expectedRole: Role.Manager,
        },
      },
      {
        path: 'users',
        component: UserManagementComponent,
        children: [
          { path: '', component: UserTableComponent, outlet: 'master' },
          {
            path: 'user',
            component: ViewUserComponent,
            outlet: 'detail',
            resolve: {
              user: UserResolver,
            },
          },
        ],
        canActivate: [authGuard],
        canActivateChild: [authGuard],
        data: {
          expectedRole: Role.Manager,
        },
      },
      {
        path: 'receipts',
        component: ReceiptLookupComponent,
        canActivate: [authGuard],
        data: {
          expectedRole: Role.Manager,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
