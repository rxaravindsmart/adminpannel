import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DressComponent } from "./dress/dress.component";
import { JwellComponent } from "./jwell/jwell.component";
import { MobileComponent } from "./mobile/mobile.component";
import { ShoesComponent } from "./shoes/shoes.component";

const routes:Routes=[
    {path:'',redirectTo:'dress',pathMatch:'full'},
    {path:'dress',component:DressComponent},
    {path:'jwell',component:JwellComponent},
    {path:'mobile',component:MobileComponent},
    {path:'shoes',component:ShoesComponent},
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CollectionRoutingModule{}
