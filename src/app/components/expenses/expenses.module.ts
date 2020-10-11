import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExpenseAddComponent } from './add/add.component';
import { ExpenseDetailsComponent } from './details/details.component';
import { ExpenseEditComponent } from './edit/edit.component';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { HeaderModule } from '../header/header.module';

const components = [
  ExpenseAddComponent,
  ExpenseDetailsComponent,
  ExpenseEditComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
  ],
  exports: [...components],
})
export class ExpensesModule {}
