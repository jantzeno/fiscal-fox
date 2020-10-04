import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ApplicationState } from '../../store/models/application-state.model';
import { Budget } from '../budgets/store/models/budget.model';
import { Expense } from '../expenses/store/models/expense.model';
import { loadBudgets, getBudgets } from '../budgets/store';
import { loadExpenses, getExpenses } from '../expenses/store';

@Injectable({ providedIn: 'root' })
export class DashboardFacade {
  readonly budgets$: Observable<Budget[]> = this.store.select(getBudgets);
  readonly expenses$: Observable<Expense[]> = this.store.select(getExpenses);

  constructor(private store: Store<ApplicationState>) {}

  loadBudgets(): void {
    this.store.dispatch(loadBudgets());
  }

  loadExpenses(): void {
    this.store.dispatch(loadExpenses());
  }

  filterExpensesForBudget(budget: Budget, expenses: Expense[]): Expense[] {
    return Object.values(expenses).filter(
      (expense) => expense.budgetId === budget.id
    );
  }

  calcExpenseTotal(expenses: Expense[]): number {
    let total = 0;
    if (expenses) {
      for (let expense of expenses) {
        total += expense.amount;
      }
    }
    return total;
  }

  calcExpenseTotalForBudget(budget: Budget, expenses: Expense[]): number {
    let total = 0;
    let budgetExpenses = this.filterExpensesForBudget(budget, expenses);
    total = this.calcExpenseTotal(budgetExpenses);
    return total;
  }

  calcRemainingBudget(budget: Budget, expenses: Expense[]): number {
    let remaining = 0;
    let budgetExpenses = this.filterExpensesForBudget(budget, expenses);
    let expenseTotal = this.calcExpenseTotal(budgetExpenses);
    if (budget.amount) {
      remaining = budget.amount - expenseTotal;
    }
    return remaining;
  }

  countExpenses(budget: Budget, expenses: Expense[]): number {
    let count = -1;
    if (budget && expenses) {
      count = this.filterExpensesForBudget(budget, expenses).length;
    }
    return count;
  }

  isDeficit(amount: Number): boolean {
    let deficit = false;
    if (amount <= 0) {
      deficit = true;
    }
    return deficit;
  }
}
