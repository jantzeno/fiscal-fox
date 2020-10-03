import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from 'src/app/components/budgets/store/models/budget.model';
import { Expense } from 'src/app/components/expenses/store/models/expense.model';
import { DashboardFacade } from './dashboard.facade';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  budgets$: Observable<Budget[]>;
  expenses$: Observable<Expense[]>;

  constructor(private dashboardFacade: DashboardFacade) {}

  ngOnInit(): void {
    this.budgets$ = this.dashboardFacade.budgets$;
    this.expenses$ = this.dashboardFacade.expenses$;
    this.dashboardFacade.loadBudgets();
    this.dashboardFacade.loadExpenses();
  }

  getExpenseCount(budget: Budget, expenses: Expense[]): number {
    return this.dashboardFacade.countExpenses(budget, expenses);
  }

  getExpenseTotal(expenses: Expense[]): number {
    return this.dashboardFacade.calcExpenseTotal(expenses);
  }

  getExpenseTotalForBudget(budget: Budget, expenses: Expense[]): number {
    return this.dashboardFacade.calcExpenseTotalForBudget(budget, expenses);
  }

  getRemainingBudget(budget: Budget, expenses: Expense[]): number {
    return this.dashboardFacade.calcRemainingBudget(budget, expenses);
  }

  isDeficit(amount): boolean {
    return this.dashboardFacade.isDeficit(amount);
  }
}
