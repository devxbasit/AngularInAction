import { Routes } from "@angular/router";
import { ProfileAccountSettingsComponent } from "../components/profile-account-settings/profile-account-settings.component";
import { ProfileEmailSettingsComponent } from "../components/profile-email-settings/profile-email-settings.component";
import { ProfileComponent } from "../components/profile/profile.component";

export const PROFILE_ROUTES: Routes = [
    {
        path: "",
        component: ProfileComponent,

        children: [
            { path: "email", component: ProfileEmailSettingsComponent },
            { path: "account", component: ProfileAccountSettingsComponent }
        ]
    },
]