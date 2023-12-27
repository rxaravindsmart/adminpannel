import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { DashMainDashComponent } from "./dash-main-dash/dash-main-dash.component";
const routes:Routes=[
{path:'',redirectTo:'dahsboard',pathMatch:'full'},
{
  path:'dahsboard',component:DashMainDashComponent
}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashBoardRoutingModule{}
