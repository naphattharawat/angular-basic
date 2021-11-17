import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    UsersComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ClarityModule
  ]
})
export class AdminModule { }
