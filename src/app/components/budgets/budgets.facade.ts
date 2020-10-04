import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ApplicationState } from '../../store/models/application-state.model';
import { Budget } from './store/models/budget.model';
import { Expense } from '../expenses/store/models/expense.model';
import {
  loadBudgets,
  getBudgets,
  getSelectedBudget,
  loadBudget,
} from './store';
import { loadExpenses, getExpenses } from '../expenses/store';

@Injectable({ providedIn: 'root' })
export class BudgetsFacade {
  readonly budgets$: Observable<Budget[]> = this.store.select(getBudgets);
  readonly expenses$: Observable<Expense[]> = this.store.select(getExpenses);
  readonly selectedBudget$: Observable<Budget> = this.store.select(
    getSelectedBudget
  );

  constructor(private store: Store<ApplicationState>) {}

  loadBudgets(): void {
    this.store.dispatch(loadBudgets());
  }

  loadBudget(id: number): void {
    if (id) {
      this.store.dispatch(loadBudget({ budgetId: id }));
    }
  }

  loadExpenses(): void {
    this.store.dispatch(loadExpenses());
  }
}
