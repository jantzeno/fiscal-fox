import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserGuard } from './user.guard';
import { UserDetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
    canActivate: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
