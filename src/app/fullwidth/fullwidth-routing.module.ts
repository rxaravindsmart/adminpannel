import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from '../auth/create-account/create-account.component';
import { PasswordComponent } from '../auth/password/password.component';
import { AuthComponent } from '../auth/auth.component';

const routes:Routes=[
    {path: 'login',component:AuthComponent},
    {path: 'auth',component:AuthComponent},
    {path: 'forget',component:PasswordComponent},
    {path: 'account',component:CreateAccountComponent},
]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class FullwidthRoutingModule { }
