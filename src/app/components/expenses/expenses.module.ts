import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseAddComponent } from './add/add.component';
import { ExpenseDetailsComponent } from './details/details.component';
import { ExpenseEditComponent } from './edit/edit.component';
import { ExpensesRoutingModule } from './expenses-routing.module';

const components = [
  ExpenseAddComponent,
  ExpenseDetailsComponent,
  ExpenseEditComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ExpensesRoutingModule],
  exports: [...components],
})
export class ExpensesModule {}
