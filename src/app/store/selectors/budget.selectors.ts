import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { BudgetState } from '../models/budget-state.model';
import { getRouteParams } from './router.selectors';

export const selectBudgetState = ({ budgetState }: ApplicationState) =>
  budgetState;

export const getBudgets = createSelector(
  selectBudgetState,
  ({ budgets }: BudgetState) => budgets
);

export const getBudgetById = createSelector(
  selectBudgetState,
  ({ budgets }: BudgetState, props) =>
    budgets.find((b) => b.id === props.budgetId)
);

export const getBudgetParams = createSelector(
  selectBudgetState,
  getRouteParams,
  (params: Params) => params['budgetId']
);
