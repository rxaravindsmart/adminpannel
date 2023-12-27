import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashMainDashComponent } from './dash-main-dash/dash-main-dash.component';
import { RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import { DashBoardRoutingModule } from './dash-board.routing';
import { FormsModule } from '@angular/forms';
import { NextDirective } from './dash-main-dash/next.Directive';
import { PrevDirective } from './dash-main-dash/prev.Directive';



@NgModule({
  declarations: [
    DashMainDashComponent,
    DashBoardComponent,
    NextDirective,
    PrevDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DashBoardRoutingModule
  ]
})
export class DashBoardModule { }
