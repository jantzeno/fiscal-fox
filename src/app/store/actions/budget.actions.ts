import { createAction, props, union } from '@ngrx/store';
import { Budget } from '../../models/budget.model';

// Load Budgets
export const loadBudgets = createAction('[API] Load Budgets');
export const loadBudgetsSuccess = createAction(
  '[API] Load Budgets Success',
  props<{ budgets: Budget[] }>()
);
export const loadBudgetsFailure = createAction(
  '[API] Load Budgets Failure',
  props<{ error: any }>()
);

// Add Budget
export const addBudget = createAction(
  '[API] Add Budget',
  props<{ budget: Budget }>()
);
export const addBudgetSuccess = createAction(
  '[API] Add Budget Success',
  props<{ budget: Budget }>()
);
export const addBudgetFailure = createAction(
  '[API] Add Budget Failure',
  props<{ error: any }>()
);

// Update Budget
// TOOD: Determine if index is needed
export const updateBudget = createAction(
  '[API] Update Budget',
  props<{ budget: Budget }>()
);
export const updateBudgetSuccess = createAction(
  '[API] Update Budget Success',
  props<{ budget: Budget }>()
);
export const updateBudgetFailure = createAction(
  '[API] Update Budget Failure',
  props<{ error: any }>()
);

// Remove Budget
export const removeBudget = createAction(
  '[API] Remove Budget',
  props<{ budget: Budget }>()
);
export const removeBudgetSuccess = createAction(
  '[API] Remove Budget Success',
  props<{ budget: Budget }>()
);
export const removeBudgetFailure = createAction(
  '[API] Remove Budget Failure',
  props<{ error: any }>()
);
const budgetActions = union({
  loadBudgets,
  loadBudgetsSuccess,
  loadBudgetsFailure,
  addBudget,
  addBudgetSuccess,
  addBudgetFailure,
  updateBudget,
  updateBudgetSuccess,
  updateBudgetFailure,
  removeBudget,
  removeBudgetSuccess,
  removeBudgetFailure,
});

export type BudgetActionTypes = typeof budgetActions;
