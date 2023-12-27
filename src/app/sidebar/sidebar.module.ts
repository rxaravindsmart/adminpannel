import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DashBoardModule } from "../headerbar/dash-board/dash-board.module";
import { ActivityComponent } from "./activity/activity.component";
import { EmailInviteComponent } from "./invite-user/email-invite/email-invite.component";
import { InviteUserComponent } from "./invite-user/invite-user.component";
import { LinkInviteComponent } from "./invite-user/link-invite/link-invite.component";
import { SettingModule } from "./setting/setting.module";
import { ShippmentComponent } from "./shippment/shippment.component";
import { TOrderComponent } from "./t-order/t-order.component";
import { UserModule } from "./user-list/user.module";

@NgModule({
  declarations:[
    ActivityComponent,
    InviteUserComponent,
    EmailInviteComponent,
    LinkInviteComponent,
    ShippmentComponent,
    TOrderComponent,
  ],
  imports:[
    CommonModule,
    RouterModule,
    DashBoardModule,
    UserModule,
    SettingModule,

  ]
})
export class SidbarModule{}
