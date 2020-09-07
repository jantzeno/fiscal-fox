import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BudgetDetailsComponent } from './components/budget-details/budget-details.component';
import { ExpenseDetailsComponent } from './components/expense-details/expense-details.component';
import { BudgetAddComponent } from './components/budget-add/budget-add.component';
import { BudgetEditComponent } from './components/budget-edit/budget-edit.component';
import { ExpenseAddComponent } from './components/expense-add/expense-add.component';
import { ExpenseEditComponent } from './components/expense-edit/expense-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BudgetDetailsComponent,
    ExpenseDetailsComponent,
    BudgetAddComponent,
    BudgetEditComponent,
    ExpenseAddComponent,
    ExpenseEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
