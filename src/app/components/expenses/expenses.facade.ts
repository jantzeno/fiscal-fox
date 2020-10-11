import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ApplicationState } from '../../store/models/application-state.model';
import { Expense } from './store/models/expense.model';
import { Budget } from '../budgets/store/models/budget.model';
import {
  getSelectedExpenseId,
  getSelectedExpense,
  createExpense,
  loadExpense,
  updateExpense,
  deleteExpense,
} from './store';
import { getSelectedBudget, getSelectedBudgetId } from '../budgets/store';
import { FormHelper } from '../helpers/form-helper';

@Injectable({ providedIn: 'root' })
export class ExpensesFacade {
  calcExpenseTotal(expenses: Expense[]) {
    throw new Error('Method not implemented.');
  }
  calcExpenseTotalForBudget(MOCK_BUDGET: Budget, expenses: Expense[]) {
    throw new Error('Method not implemented.');
  }
  calcRemainingBudget(MOCK_BUDGET: Budget, expenses: Expense[]) {
    throw new Error('Method not implemented.');
  }
  countExpenses(MOCK_BUDGET: Budget, expenses: Expense[]) {
    throw new Error('Method not implemented.');
  }
  isDeficit(arg0: number) {
    throw new Error('Method not implemented.');
  }
  readonly selectedExpense$: Observable<Expense> = this.store.select(
    getSelectedExpense
  );
  readonly selectedBudget$: Observable<Budget> = this.store.select(
    getSelectedBudget
  );

  constructor(private store: Store<ApplicationState>) {}

  createExpense(expense): void {
    this.store
      .select(getSelectedBudgetId)
      .subscribe((id) => {
        if (id && expense) {
          expense.budgetId = id;
          this.store.dispatch(createExpense({ expense: expense }));
        }
      })
      .unsubscribe();
  }

  updateExpense(expense): void {
    if (expense) {
      this.store.dispatch(updateExpense({ expense: expense }));
    }
  }

  deleteExpense(expense): void {
    if (expense) {
      this.store.dispatch(deleteExpense({ expense: expense }));
    }
  }

  loadExpense(): void {
    this.store
      .select(getSelectedExpenseId)
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(loadExpense({ expenseId: id }));
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
}
