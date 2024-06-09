import { NgModule } from '@angular/core';
import { UpsertUserComponent } from './components/upsert-user/upsert-user.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserListComponent,
    UpsertUserComponent,
    ViewUserComponent,
    DeleteUserComponent,
  ],
  imports: [RouterModule, CommonModule],
  exports: [UserRoutingModule],
})
export class UserModule {}
