import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:LoginDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
