import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CollectionRoutingModule } from "./collection-routing.module";
import { CollectionsComponent } from "./collections.component";
import { DressComponent } from "./dress/dress.component";
import { JwellComponent } from "./jwell/jwell.component";
import { MobileComponent } from "./mobile/mobile.component";
import { ShoesComponent } from "./shoes/shoes.component";

@NgModule({
  declarations:[
    CollectionsComponent,
    DressComponent,
    ShoesComponent,
    JwellComponent,
    MobileComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    CollectionRoutingModule,
    // NgModule
    NgbModule
  ]
})
export class CollectionModule{}
