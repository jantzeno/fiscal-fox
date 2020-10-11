import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetAddComponent } from './add/add.component';
import { BudgetDetailsComponent } from './details/details.component';
import { BudgetEditComponent } from './edit/edit.component';
import { BudgetsRoutingModule } from './budgets-routing.module';
import { HeaderModule } from '../header/header.module';

const components = [
  BudgetAddComponent,
  BudgetDetailsComponent,
  BudgetEditComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    BudgetsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
  ],
  exports: [...components],
})
export class BudgetsModule {}
