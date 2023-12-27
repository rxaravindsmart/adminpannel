import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { UserAddComponent } from "./add/user-add/user-add.component";
import { UserDetailComponent } from "./add/user-detail/user-detail.component";
import { UserListComponent } from "./user-list.component";
import { UserRoutingModule } from "./user-routing.module";
import { UsersComponent } from "./users/users.component";

@NgModule({
  declarations:[
    UserListComponent,
    UserAddComponent,
    UserDetailComponent,
    UsersComponent,
    AddComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule{}
