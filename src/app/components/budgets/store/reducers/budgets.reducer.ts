import { createReducer, on, Action } from '@ngrx/store';
import * as BudgetActions from '../actions/budget.actions';
import { BUDGETS_INITIAL_STATE } from '../models/budgets-initial-state';
import { BudgetsState } from '../models/budgets-state.model';

const reducer = createReducer(
  BUDGETS_INITIAL_STATE,
  // Load Budgets
  on(BudgetActions.loadBudgets, (state) => ({ ...state, isLoading: true })),
  on(BudgetActions.loadBudgetsSuccess, (state, { budgets }) => ({
    ...state,
    budgets,
    isLoading: false,
    isLoaded: true,
  })),
  on(BudgetActions.loadBudgetsFailure, (state) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
  }))
);

export function budgetsReducer(
  state: BudgetsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
