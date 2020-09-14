import { AppState, BudgetState } from '../application-state.model';
import { createSelector } from '@ngrx/store';

export const selectBudgetState = ({ budgetState }: AppState) => budgetState;

export const getBudgets = createSelector(
  selectBudgetState,
  ({ budgets }: BudgetState) => budgets
);
