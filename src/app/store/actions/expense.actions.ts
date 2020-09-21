import { createAction, props, union } from '@ngrx/store';
import { Expense } from '../../models/expense.model';

// Load Expenses
export const loadExpenses = createAction('[API] Load Expenses');
export const loadExpensesSuccess = createAction(
  '[API] Load Expenses Success',
  props<{ expenses: Expense[] }>()
);
export const loadExpensesFailure = createAction(
  '[API] Load Expenses Failure',
  props<{ error: any }>()
);

// Add Expense
export const addExpense = createAction(
  '[API] Add Expense',
  props<{ expense: Expense }>()
);
export const addExpenseSuccess = createAction(
  '[API] Add Expense Success',
  props<{ expense: Expense }>()
);
export const addExpenseFailure = createAction(
  '[API] Add Expense Failure',
  props<{ error: any }>()
);

// Update Expense
// TODO: Determine if index is needed
export const updateExpense = createAction(
  '[API] Update Expense',
  props<{ index: number; expense: Expense }>()
);
export const updateExpenseSuccess = createAction(
  '[API] Update Expense Success',
  props<{ index: number; expense: Expense }>()
);
export const updateExpenseFailure = createAction(
  '[API] Update Expense Failure',
  props<{ error: any }>()
);

// Remove Expense
export const removeExpense = createAction(
  '[API] Remove Expense',
  props<{ expense: Expense }>()
);
export const removeExpenseSuccess = createAction(
  '[API] Remove Expense Success',
  props<{ expense: Expense }>()
);
export const removeExpenseFailure = createAction(
  '[API] Remove Expense Failure',
  props<{ error: any }>()
);
const expenseActions = union({
  loadExpenses,
  loadExpensesSuccess,
  loadExpensesFailure,
  addExpense,
  addExpenseSuccess,
  addExpenseFailure,
  updateExpense,
  updateExpenseSuccess,
  updateExpenseFailure,
  removeExpense,
  removeExpenseSuccess,
  removeExpenseFailure,
});
export type ExpenseActionTypes = typeof expenseActions;
