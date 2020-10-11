import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ApplicationState } from '../../store/models/application-state.model';
import { Budget } from '../budgets/store/models/budget.model';
import { Expense } from '../expenses/store/models/expense.model';
import { loadBudgets, getBudgets } from '../budgets/store';
import { loadExpenses, getExpenses } from '../expenses/store';
import { CalcHelper } from '../helpers/calc-helper';

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
    return CalcHelper.filterExpensesForBudget(budget, expenses);
  }

  calcExpenseTotal(expenses: Expense[]): number {
    return CalcHelper.calcExpenseTotal(expenses);
  }

  calcExpenseTotalForBudget(budget: Budget, expenses: Expense[]): number {
    return CalcHelper.calcExpenseTotalForBudget(budget, expenses);
  }

  calcRemainingBudget(budget: Budget, expenses: Expense[]): number {
    return CalcHelper.calcRemainingBudget(budget, expenses);
  }

  countExpenses(budget: Budget, expenses: Expense[]): number {
    return CalcHelper.countExpenses(budget, expenses);
  }

  isDeficit(amount: Number): boolean {
    return CalcHelper.isDeficit(amount);
  }
}
