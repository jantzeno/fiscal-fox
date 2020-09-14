import { createAction, props, union } from '@ngrx/store';
import { Budget } from '../../models/budget';

export const updateBudget = createAction('[Budget] Update budget');
export const deleteBudget = createAction('[Budget] Delete budgets');

const budgetActions = union({
  updateBudget,
  deleteBudget,
});

export type BudgetActionTypes = typeof budgetActions;
