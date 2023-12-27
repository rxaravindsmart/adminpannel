import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CollectionModule } from "./collections/collection.module";
import { DeliveryComponent } from "./delivery/delivery.component";
import { HomeComponent } from "./home/home.component";
import { OrderModule } from "./orders/order.module";
import { ProductsComponent } from "./products/products.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations:[
    HomeComponent,
    ProductsComponent,
    DeliveryComponent,
  ],
  imports:[
    CommonModule,
    RouterModule,
    OrderModule,
    CollectionModule,
    NgbModule,

  ]
})
export class HeaderbarModule{}
