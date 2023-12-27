import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { PasswordComponent } from "./password/password.component";

const routes:Routes=[
  {path:'',component:AuthComponent},
  {path:'forget',component:PasswordComponent},
  {path:'create',component:CreateAccountComponent}
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AuthRoutingModule{}
