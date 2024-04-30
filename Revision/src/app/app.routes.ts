import { Route, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EmailSettingsComponent } from './components/email-settings/email-settings.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { EmailSettingsLazyComponent } from './components/email-settings-lazy/email-settings-lazy.component';
import { AccountSettingsLazyComponent } from './components/account-settings-lazy/account-settings-lazy.component';

export const routes: Routes = [

    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', redirectTo: '' },
    { path: 'contact', component: ContactComponent },

    { path: 'products', loadComponent: () => import("./components/products/products.component").then(c => c.ProductsComponent) },
    { path: 'products/:productId', loadComponent: () => import("./components/product/product.component").then(c => c.ProductComponent) },


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
    { path: 'settings', loadComponent: () => import('./components/about/about.component').then(c => c.AboutComponent) },
];











