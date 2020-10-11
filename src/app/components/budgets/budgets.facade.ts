import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { ApplicationState } from '../../store/models/application-state.model';
import { Budget } from './store/models/budget.model';
import { Expense } from '../expenses/store/models/expense.model';
import {
  loadBudgets,
  getBudgets,
  getSelectedBudget,
  loadBudget,
  createBudget,
  updateBudget,
  getSelectedBudgetId,
  deleteBudget,
} from './store';
import { loadExpensesByBudgetId, getExpenses } from '../expenses/store';
import { CalcHelper } from '../helpers/calc-helper';
import { FormHelper } from '../helpers/form-helper';

@Injectable({ providedIn: 'root' })
export class BudgetsFacade {
  readonly budgets$: Observable<Budget[]> = this.store.select(getBudgets);
  readonly expenses$: Observable<Expense[]> = this.store.select(getExpenses);
  readonly selectedBudget$: Observable<Budget> = this.store.select(
    getSelectedBudget
  );

  constructor(private store: Store<ApplicationState>) {}

  createBudget(budget): void {
    if (budget) {
      this.store.dispatch(createBudget({ budget: budget }));
    }
  }

  updateBudget(budget): void {
    if (budget) {
      this.store.dispatch(updateBudget({ budget: budget }));
    }
  }

  deleteBudget(budget): void {
    if (budget) {
      this.store.dispatch(deleteBudget({ budget: budget }));
    }
  }

  loadBudgets(): void {
    this.store.dispatch(loadBudgets());
  }

  loadBudget(): void {
    this.store
      .select(getSelectedBudgetId)
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(loadBudget({ budgetId: id }));
        }
      })
      .unsubscribe();
  }

  loadExpensesForBudget(): void {
    this.store
      .select(getSelectedBudgetId)
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(loadExpensesByBudgetId({ budgetId: id }));
        }
      })
      .unsubscribe();
  }

  checkValidInput(form, fieldName): boolean {
    return FormHelper.checkValidInput(form, fieldName);
  }

  getErrors(form, fieldName) {
    return FormHelper.getErrors(form, fieldName);
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
