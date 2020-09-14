import { createReducer, on, Action } from '@ngrx/store';
import { Budget } from '../../models/budget';
import * as BudgetActions from '../actions/budget.actions';
import { AppState, BudgetState } from '../application-state.model';

export const initialState: BudgetState = {
  budgets: new Map<number, Budget>([
    [1, new Budget('IT Systems', 5000)],
    [2, new Budget('Christmas Party', 500)],
  ]),
};

const reducer = createReducer(
  initialState,
  on(BudgetActions.updateBudget, (state, action) => ({
    ...state,
  })),
  on(BudgetActions.deleteBudget, (state, action) => ({
    ...state,
  }))
);

export function budgetReducer(state: BudgetState | undefined, action: Action) {
  return reducer(state, action);
}
