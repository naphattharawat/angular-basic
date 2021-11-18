import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    Page1Component,
    Page2Component,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ClarityModule,
    HttpClientModule,
    NgChartsModule
  ]
})
export class HomeModule { }
