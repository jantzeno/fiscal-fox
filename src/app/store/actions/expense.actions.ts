import { createAction, props, union } from '@ngrx/store';
import { Expense } from '../../models/expense';

export const updateExpense = createAction('[Expense] Update Expense');
export const deleteExpense = createAction('[Expense] Delete Expenses');

const expenseActions = union({
  updateExpense,
  deleteExpense,
});

export type ExpenseActionTypes = typeof expenseActions;
