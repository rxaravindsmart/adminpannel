import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from '../sidebar/activity/activity.component';
import { TOrderComponent } from '../sidebar/t-order/t-order.component';
import { ShippmentComponent } from '../sidebar/shippment/shippment.component';
import { UserListComponent } from '../sidebar/user-list/user-list.component';
import { SettingComponent } from '../sidebar/setting/setting.component';
import { InviteUserComponent } from '../sidebar/invite-user/invite-user.component';
import { EmailInviteComponent } from '../sidebar/invite-user/email-invite/email-invite.component';
import { LinkInviteComponent } from '../sidebar/invite-user/link-invite/link-invite.component';
import { ProductsComponent } from '../headerbar/products/products.component';
import { CollectionsComponent } from '../headerbar/collections/collections.component';
import { OrdersComponent } from '../headerbar/orders/orders.component';
import { DeliveryComponent } from '../headerbar/delivery/delivery.component';
import { UserModule } from '../sidebar/user-list/user.module';
import { SettingModule } from '../sidebar/setting/setting.module';
import { CollectionModule } from '../headerbar/collections/collection.module';
import { OrderModule } from '../headerbar/orders/order.module';
import { DashBoardModule } from '../headerbar/dash-board/dash-board.module';
import { DashBoardComponent } from '../headerbar/dash-board/dash-board.component';
const routes:Routes=[
  {path:'',component:DashBoardComponent},
  {path:'dahsboard',component:DashBoardComponent,
  loadChildren:()=> DashBoardModule
  },
    {path:'activity',component:ActivityComponent},
    {path:'t-order',component:TOrderComponent},
    {path:'shipment',component:ShippmentComponent},
    {path:'user-list',component:UserListComponent,
    loadChildren: () =>  UserModule
    },
    {path:'setting', component:SettingComponent,
    loadChildren:() =>SettingModule
    },
    {path:'invite',component:InviteUserComponent,
    children:[
      {path:'',component:EmailInviteComponent},
      {path:'link',component:LinkInviteComponent},
      {path:'email',component:EmailInviteComponent}
    ]
    },
    {path: 'products',component:ProductsComponent},
    {path: 'collection',component:CollectionsComponent,
    loadChildren:()=> CollectionModule
    },
    {path: 'order',component:OrdersComponent,
    loadChildren:()=> OrderModule
    },
    {path: 'delivery',component:DeliveryComponent},
]


@NgModule({
  imports:[RouterModule.forChild(routes,)],
  exports:[RouterModule]
})
export class DefaultRoutingModule { }
