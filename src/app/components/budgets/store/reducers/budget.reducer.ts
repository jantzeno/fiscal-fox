import { createReducer, on, Action } from '@ngrx/store';
import * as BudgetActions from '../actions/budget.actions';
import { BudgetState } from '../models/budget-state.model';
import { BUDGET_INITIAL_STATE } from '../models/budget-initial-state';

const reducer = createReducer(
  BUDGET_INITIAL_STATE,

  // Load Budget
  on(BudgetActions.loadBudget, (state) => ({ ...state, isLoading: true })),
  on(BudgetActions.loadBudgetSuccess, (state, { budget }) => ({
    ...state,
    budget,
    isLoading: false,
    isLoaded: true,
  })),
  on(BudgetActions.loadBudgetsFailure, (state) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
  }))
);

export function budgetReducer(state: BudgetState | undefined, action: Action) {
  return reducer(state, action);
}
