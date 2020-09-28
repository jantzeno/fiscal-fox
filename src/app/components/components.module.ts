import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetAddComponent } from './budget/add/add.component';
import { BudgetDetailsComponent } from './budget/details/details.component';
import { BudgetEditComponent } from './budget/edit/edit.component';
import { ExpenseAddComponent } from './expense/add/add.component';
import { ExpenseDetailsComponent } from './expense/details/details.component';
import { ExpenseEditComponent } from './expense/edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  PageNotFoundComponent,
  RegisterComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...components],
})
export class ComponentsModule {}
