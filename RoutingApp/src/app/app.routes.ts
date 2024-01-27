import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { NotificationSettingsComponent } from './components/notification-settings/notification-settings.component';
import { AppearanceSettingsComponent } from './components/appearance-settings/appearance-settings.component';
import { NotFound404Component } from './components/not-found-404/not-found-404.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/courses/course/course.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthguardService } from './services/authguard.service';
import { CourseFormComponent } from './components/course-form/course-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Routing App In Action',
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'courses',
    canActivate: [
      () => {
        return true;
      },
    ],
    component: CoursesComponent,
    resolve: { someData: AuthguardService },
    data: { staticData: 'static Data' },
  },
  {
    path: 'courses',
    children: [
      {
        path: 'course/:courseId',
        component: CourseComponent,
      },
    ],
  },
  {
    path: '',
    canActivate: [AuthguardService],
    canActivateChild: [AuthguardService],
    children: [
      {
        path: 'add-course',
        component: CourseFormComponent,
        canDeactivate: [AuthguardService],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      { path: 'payments', redirectTo: '/', pathMatch: 'full' },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: 'account',
            component: AccountSettingsComponent,
          },
          {
            path: 'notification',
            component: NotificationSettingsComponent,
          },
          {
            path: 'appearance',
            component: AppearanceSettingsComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    component: NotFound404Component,
    title: '404 - Page Not Found!',
  },
];
