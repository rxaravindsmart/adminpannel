import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth.routing.module";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { PasswordComponent } from "./password/password.component";

@NgModule({
  declarations:[
    AuthComponent,
    CreateAccountComponent,
    PasswordComponent
  ],
  imports:[
    AuthRoutingModule,
    RouterModule,
    CommonModule
  ]
})
export class AuthModule{}
