import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
//import { CustomerListComponent } from './customers/customer-list/customer-list.component';

const routes: Routes = [
  // {
  //   path:"orders",
  //   loadChildren:"./orders/orders.module#OrdersModule"
  // },
  // {
  //   path:"customers", 
  //   loadChildren:'./customers/customers.module#CustomersModule'
  // },
  {
    path:"",
    pathMatch:"full",
    redirectTo:""
  },
  {
    path:"login",
    loadChildren:"./login/login.module#LoginModule"
  },
  {
    path:"register",
    loadChildren:"./register/register.module#RegisterModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
