import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterDashboardComponent } from './register-dashboard/register-dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:RegisterDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
