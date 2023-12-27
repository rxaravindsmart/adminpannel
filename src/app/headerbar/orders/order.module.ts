import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AllorderComponent } from "./allorder/allorder.component";
import { CompletedComponent } from "./completed/completed.component";
import { DispatchComponent } from "./dispatch/dispatch.component";
import { OrderRoutingModule } from "./order-routing.module";
import { OrdersComponent } from "./orders.component";
import { PendingComponent } from "./pending/pending.component";

@NgModule({
  declarations:[
    OrdersComponent,
    AllorderComponent,
    DispatchComponent,
    PendingComponent,
    CompletedComponent,
  ],
  imports:[
    CommonModule,
    RouterModule,
    OrderRoutingModule
  ]
})
export class OrderModule{}
