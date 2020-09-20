import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { BudgetAddComponent } from './budget-add/budget-add.component';
import { BudgetEditComponent } from './budget-edit/budget-edit.component';
import { ExpenseAddComponent } from './expense-add/expense-add.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { LoginComponent } from './login/login.component';

const components = [
  DashboardComponent,
  BudgetAddComponent,
  BudgetDetailsComponent,
  BudgetEditComponent,
  ExpenseAddComponent,
  ExpenseDetailsComponent,
  ExpenseEditComponent,
  HeaderComponent,
  LoginComponent,
  NavComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, NgbModule, ReactiveFormsModule],
  exports: [...components],
})
export class ComponentsModule {}