import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetAddComponent } from './add/add.component';

import { BudgetsGuard } from './budgets.guard';
import { BudgetDetailsComponent } from './details/details.component';
import { BudgetEditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'details/:budgetId',
    component: BudgetDetailsComponent,
    canActivate: [BudgetsGuard],
  },

  {
    path: 'new',
    component: BudgetAddComponent,
  },

  {
    path: 'edit/:budgetId',
    component: BudgetEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetsRoutingModule {}
