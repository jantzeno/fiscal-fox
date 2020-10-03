import { createSelector } from '@ngrx/store';
import { Params } from '@angular/router';
import { ApplicationState } from '../../../../store/models/application-state.model';
import { BudgetsState } from '../models/budgets-state.model';
import { BudgetState } from '../models/budget-state.model';
import { getRouteParams } from '../../../../store/selectors/router.selectors';

export const budgetsState = ({ budgetsState }: ApplicationState) =>
  budgetsState;
export const selectedBudgetState = ({ selectedBudget }: ApplicationState) =>
  selectedBudget;

export const getBudgets = createSelector(
  budgetsState,
  (state: BudgetsState) => state?.budgets
);

export const getBudgetsLoaded = createSelector(
  budgetsState,
  (state: BudgetsState) => state?.isLoaded
);

export const getSelectedBudget = createSelector(
  selectedBudgetState,
  (state: BudgetState) => state?.budget
);

export const getSelectedBudgetId = createSelector(
  getRouteParams,
  (params: Params) => params['budgetId']
);
