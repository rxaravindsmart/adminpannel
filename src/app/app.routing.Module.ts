import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { DefaultModule } from './default/default.module';
import { FullwidthComponent } from './fullwidth/fullwidth.component';
import { FullWidthtModule } from './fullwidth/fullwidth.module';

const approutes:Routes=[
  {path: '',component:DefaultComponent ,
  loadChildren:()=> DefaultModule
},
  {path: 'login', component:FullwidthComponent,
  loadChildren:()=> FullWidthtModule
},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
