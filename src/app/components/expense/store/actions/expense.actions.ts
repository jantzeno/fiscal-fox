import { createAction, props, union } from '@ngrx/store';
import { Expense } from '../models/expense.model';

// Click Events
export const addExpense = createAction('[Click] Add Expense');

// API Events
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

// Load Expense
export const loadExpense = createAction(
  '[API] Load Expense',
  props<{ expenseId: number }>()
);
export const loadExpenseSuccess = createAction(
  '[API] Load Expense Success',
  props<{ expense: Expense }>()
);
export const loadExpenseFailure = createAction(
  '[API] Load Expense Failure',
  props<{ error: any }>()
);

// Add Expense
export const createExpense = createAction(
  '[API] Add Expense',
  props<{ expense: Expense }>()
);
export const createExpenseSuccess = createAction(
  '[API] Add Expense Success',
  props<{ expense: Expense }>()
);
export const createExpenseFailure = createAction(
  '[API] Add Expense Failure',
  props<{ error: any }>()
);

// Update Expense
export const updateExpense = createAction(
  '[API] Update Expense',
  props<{ expense: Expense }>()
);
export const updateExpenseSuccess = createAction(
  '[API] Update Expense Success',
  props<{ expense: Expense }>()
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
  addExpense,
  loadExpenses,
  loadExpensesSuccess,
  loadExpensesFailure,
  createExpense,
  createExpenseSuccess,
  createExpenseFailure,
  updateExpense,
  updateExpenseSuccess,
  updateExpenseFailure,
  removeExpense,
  removeExpenseSuccess,
  removeExpenseFailure,
});

export type ExpenseActionTypes = typeof expenseActions;
