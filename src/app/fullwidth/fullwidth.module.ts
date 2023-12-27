import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "../auth/auth.component";
import { AuthModule } from "../auth/auth.module";
import { CreateAccountComponent } from "../auth/create-account/create-account.component";
// import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { PasswordComponent } from "../auth/password/password.component";
import { FullwidthRoutingModule } from "./fullwidth-routing.module";
import { FullwidthComponent } from "./fullwidth.component";

@NgModule({
  declarations:[
    FullwidthComponent,
  ],
  imports:[
    CommonModule,
    RouterModule,
    AuthModule,
    FullwidthRoutingModule
  ]
})
export class FullWidthtModule{}
