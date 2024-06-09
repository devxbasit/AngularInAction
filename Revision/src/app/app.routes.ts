import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EmailSettingsComponent } from './components/email-settings/email-settings.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { AuthGuardService } from './services/authguard.service.ts';
import { UserComponent } from './components/user/user.component';
import { NotFound404Component } from './components/not-found-404/not-found-404.component';
import { RegistrationUserComponent } from './components/registration-user/registration-user.component';
import { RegistrationAdminComponent } from './components/registration-admin/registration-admin.component';

export const routes: Routes = [

    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', redirectTo: '' },
    { path: 'contact', component: ContactComponent },


    { path: 'user', component: UserComponent },
    { path: 'user-registration', component: RegistrationUserComponent },
    { path: 'admin-registration', component: RegistrationAdminComponent },


    {
        path: 'products',
        lpoadComponent: () => import("./components/roducts/products.component").then(c => c.ProductsComponent),
        canActivate: [AuthGuardService, () => true],
        canActivateChild: [AuthGuardService, AuthGuardService],
        canDeactivate: [AuthGuardService],
        canLoad: [AuthGuardService],
        resolve: { dataKey: AuthGuardService }

    },
    { path: 'products/:productId', loadComponent: () => import("./components/product/product.component").then(c => c.ProductComponent) },



    // eager loading component

    {
        path: 'settings', component: SettingsComponent,
        children: [
            { path: 'email', component: EmailSettingsComponent },
            { path: 'account', component: AccountSettingsComponent }
        ]
    },

    // lazy loading single component
    {
        path: 'payment',
        loadComponent: () => import('./components/payment/payment.component').then(c => c.PaymentComponent),
    },

    // lazy loading features 
    {
        path: 'settings-lazy',
        loadChildren: () => import('./const/settings.routes').then(r => r.SETTINGS_ROUTES)
    },


    { path: 'about', loadComponent: () => import('./components/about/about.component').then(c => c.AboutComponent) },

    { path: '**', component: NotFound404Component }
];











