import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllorderComponent } from "./allorder/allorder.component";
import { CompletedComponent } from "./completed/completed.component";
import { DispatchComponent } from "./dispatch/dispatch.component";
import { PendingComponent } from "./pending/pending.component";

const routes:Routes=[
    {path:'',redirectTo:'allorder',pathMatch:'full'},
    {path:'allorder',component:AllorderComponent},
    {path:'dispatch',component:DispatchComponent},
    {path:'pending',component:PendingComponent},
    {path:'completed',component:CompletedComponent}
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class OrderRoutingModule{}
