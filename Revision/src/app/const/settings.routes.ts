import { Routes } from "@angular/router";
import { EmailSettingsLazyComponent } from "../components/email-settings-lazy/email-settings-lazy.component";
import { AccountSettingsLazyComponent } from "../components/account-settings-lazy/account-settings-lazy.component";
import { SettingsLazyComponent } from "../components/settings-lazy/settings-lazy.component";

export const SETTINGS_ROUTES: Routes = [
    {
        path: "",
        component: SettingsLazyComponent,
        children: [
            { path: "email", component: EmailSettingsLazyComponent },
            { path: "account", component: AccountSettingsLazyComponent }
        ]
    },
]
