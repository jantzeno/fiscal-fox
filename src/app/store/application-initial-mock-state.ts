import {
  AppState,
  AuthState,
  BudgetState,
  ExpenseState,
} from './application-state.model';

export const AUTH_INITIAL_MOCK_STATE: AuthState = {
  isAuth: false,
  user: null,
};

export const BUDGET_INITIAL_MOCK_STATE: BudgetState = {
  budgets: null,
};

export const EXPENSE_INITIAL_MOCK_STATE: ExpenseState = {
  expenses: null,
};

export const APP_INTIAL_STATE: AppState = {
  authState: AUTH_INITIAL_MOCK_STATE,
  budgetState: BUDGET_INITIAL_MOCK_STATE,
  expenseState: EXPENSE_INITIAL_MOCK_STATE,
};
