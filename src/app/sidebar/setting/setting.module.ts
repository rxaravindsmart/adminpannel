import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BillingComponent } from "./billing/billing.component";
import { IntegrationComponent } from "./integration/integration.component";
import { MyDetailsComponent } from "./my-details/my-details/my-details.component";
import { NotificationComponent } from "./notification/notification.component";
import { ProfileComponent } from "./profile/profile.component";
import { SettingPasswordComponent } from "./setting-password/setting-password.component";
import { SettingRoutingModule } from "./setting-routing.module";
import { SettingComponent } from "./setting.component";
import { TeamComponent } from "./team/team.component";

@NgModule({
  declarations:[
    BillingComponent,
    IntegrationComponent,
    MyDetailsComponent,
    NotificationComponent,
    ProfileComponent,
    SettingPasswordComponent,
    TeamComponent,
    SettingComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    SettingRoutingModule
  ]
})
export class SettingModule{}
