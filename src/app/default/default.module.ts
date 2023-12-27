import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderNavComponent } from "../header-nav/header-nav.component";
import { DefaultComponent } from "./default.component";
import { SidbarModule } from "../sidebar/sidebar.module";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DefaultRoutingModule } from "./default.routing.module";

@NgModule({
  declarations:[
    DefaultComponent,
    HeaderNavComponent,
    SidebarComponent,
  ],
  imports:[
    RouterModule,
    CommonModule,
    SidbarModule,
    FormsModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule{}
