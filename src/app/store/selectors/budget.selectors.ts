import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { BudgetState } from '../models/budget-state.model';

export const selectBudgetState = ({ budgetState }: ApplicationState) =>
  budgetState;

export const getBudgets = createSelector(
  selectBudgetState,
  ({ budgets }: BudgetState) => budgets
);

export const getBudget = createSelector(
  selectBudgetState,
  ({ budgets }: BudgetState, props) =>
    budgets.filter((b) => b._id === props.selectedBudget)
);