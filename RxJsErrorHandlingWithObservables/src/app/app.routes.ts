import { Routes } from '@angular/router';
export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    {
        path: 'users',
        loadComponent: () => {
            console.log('lazy loading component')
            const promise_typeOfImport = import('./component/user-list/user-list.component');
            const promise_typeOfUserListComponent = promise_typeOfImport.then(c => c.UserListComponent);
            return promise_typeOfUserListComponent;
        }
    }
];
