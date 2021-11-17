import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path:'',redirectTo:'page1',pathMatch:'full'},
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
