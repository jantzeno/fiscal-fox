import { createAction, props, union } from '@ngrx/store';
import { Budget } from '../models/budget.model';

// Click Events
export const addBudget = createAction('[Click] Add Budget');

// API Events
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

// Load Budget
export const loadBudget = createAction(
  '[API] Load Budget',
  props<{ budgetId: number }>()
);
export const loadBudgetSuccess = createAction(
  '[API] Load Budget Success',
  props<{ budget: Budget }>()
);
export const loadBudgetFailure = createAction(
  '[API] Load Budget Failure',
  props<{ error: any }>()
);

// Add Budget
export const createBudget = createAction(
  '[API] Add Budget',
  props<{ budget: Budget }>()
);
export const createBudgetSuccess = createAction(
  '[API] Add Budget Success',
  props<{ budget: Budget }>()
);
export const createBudgetFailure = createAction(
  '[API] Add Budget Failure',
  props<{ error: any }>()
);

// Update Budget
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
  addBudget,
  loadBudgets,
  loadBudgetsSuccess,
  loadBudgetsFailure,
  createBudget,
  createBudgetSuccess,
  createBudgetFailure,
  updateBudget,
  updateBudgetSuccess,
  updateBudgetFailure,
  removeBudget,
  removeBudgetSuccess,
  removeBudgetFailure,
});

export type BudgetActionTypes = typeof budgetActions;
