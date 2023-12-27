import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BillingComponent } from "./billing/billing.component";
import { IntegrationComponent } from "./integration/integration.component";
import { MyDetailsComponent } from "./my-details/my-details/my-details.component";
import { NotificationComponent } from "./notification/notification.component";
import { ProfileComponent } from "./profile/profile.component";
import { SettingPasswordComponent } from "./setting-password/setting-password.component";
import { TeamComponent } from "./team/team.component";

const routes:Routes=[
    {path: '', redirectTo:'my-details',pathMatch:'full'},
    {path: 'my-details', component:MyDetailsComponent},
    {path: 'integration', component:IntegrationComponent},
    {path: 'profile',component:ProfileComponent},
    {path: 'pass',component:SettingPasswordComponent},
    {path: 'billing',component:BillingComponent},
    {path: 'notifications',component:NotificationComponent},
    {path: 'team' , component:TeamComponent}
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SettingRoutingModule{}
