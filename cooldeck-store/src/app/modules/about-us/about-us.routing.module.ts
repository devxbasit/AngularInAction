import { NgModule, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core'
import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        component: About
    }
]


@NgModule({
    imports: [],
    exports: []
})
export class AboutUsRoutingModule {

}