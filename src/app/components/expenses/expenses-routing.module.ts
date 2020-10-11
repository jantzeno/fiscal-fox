import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesGuard } from './expenses.guard';
import { ExpenseDetailsComponent } from './details/details.component';
import { ExpenseAddComponent } from './add/add.component';
import { ExpenseEditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'details/:expenseId',
    component: ExpenseDetailsComponent,
    canActivate: [ExpensesGuard],
  },

  {
    path: 'new/:budgetId',
    component: ExpenseAddComponent,
  },

  {
    path: 'edit/:expenseId',
    component: ExpenseEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesRoutingModule {}
