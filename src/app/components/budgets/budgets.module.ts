import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetAddComponent } from './add/add.component';
import { BudgetDetailsComponent } from './details/details.component';
import { BudgetEditComponent } from './edit/edit.component';
import { BudgetsRoutingModule } from './budgets-routing.module';

const components = [
  BudgetAddComponent,
  BudgetDetailsComponent,
  BudgetEditComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, BudgetsRoutingModule],
  exports: [...components],
})
export class BudgetsModule {}
