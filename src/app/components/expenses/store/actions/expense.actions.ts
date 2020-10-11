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

export const loadExpensesByBudgetId = createAction(
  '[API] Load Expenses By BudgetId',
  props<{ budgetId: number }>()
);
export const loadExpensesByBudgetIdSuccess = createAction(
  '[API] Load Expenses By BudgetId Success',
  props<{ expenses: Expense[] }>()
);
export const loadExpensesByBudgetIdFailure = createAction(
  '[API] Load Expenses By BudgetId Failure',
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

// Delete Expense
export const deleteExpense = createAction(
  '[API] Delete Expense',
  props<{ expense: Expense }>()
);
export const deleteExpenseSuccess = createAction(
  '[API] Delete Expense Success',
  props<{ expense: Expense }>()
);
export const deleteExpenseFailure = createAction(
  '[API] Delete Expense Failure',
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
  deleteExpense,
  deleteExpenseSuccess,
  deleteExpenseFailure,
});

export type ExpenseActionTypes = typeof expenseActions;
