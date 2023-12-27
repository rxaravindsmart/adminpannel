import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { UsersComponent } from "./users/users.component";

const routes:Routes=[
        {path:'',redirectTo:'users',pathMatch:'full'},
        {path:'users',component:UsersComponent},
        {path:'add',component:AddComponent}
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class UserRoutingModule{}
