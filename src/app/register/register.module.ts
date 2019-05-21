import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterDashboardComponent } from './register-dashboard/register-dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterDashboardComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule
  ]
})
export class RegisterModule { }
