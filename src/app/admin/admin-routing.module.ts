import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path: 'admin',
  component: LayoutComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
