import { ApplicationState } from './application-state.model';
import { AuthState } from './auth-state.model';
import { BudgetState } from './budget-state.model';
import { ExpenseState } from './expense-state.model';
import { UserState } from './user-state.model';

export const ROUTER_INITIAL_MOCK_STATE = null;

export const AUTH_INITIAL_MOCK_STATE: AuthState = {
  isAuth: false,
  isRegistered: false,
  token: '',
  isLoading: false,
  errorMessage: '',
};

export const BUDGET_INITIAL_MOCK_STATE: BudgetState = {
  budgets: [],
  isLoading: true,
  errorMessage: null,
};

export const BUDGET_LOADED_MOCK_STATE: BudgetState = {
  budgets: [
    { id: 1, name: 'IT Refresh', amount: 5000 },
    { id: 2, name: 'Christmas Party', amount: 500 },
  ],
  isLoading: false,
  errorMessage: null,
};

export const EXPENSE_INITIAL_MOCK_STATE: ExpenseState = {
  expenses: [],
  isLoading: true,
  errorMessage: null,
};

export const EXPENSE_LOADED_MOCK_STATE: ExpenseState = {
  expenses: [
    { id: 1, budgetId: 1, name: 'IT Refresh', amount: 5000 },
    { id: 2, budgetId: 2, name: 'Christmas Party', amount: 500 },
  ],
  isLoading: false,
  errorMessage: null,
};

export const USER_INITIAL_MOCK_STATE: UserState = {
  user: null,
  isLoading: false,
  errorMessage: null,
};

export const USER_LOADED_MOCK_STATE: UserState = {
  user: {
    username: 'mrfox',
    email: 'mrfox@burrow.com',
    role: 'program Manager',
  },
  isLoading: false,
  errorMessage: null,
};

export const APP_INTIAL_STATE: ApplicationState = {
  router: ROUTER_INITIAL_MOCK_STATE,
  authState: AUTH_INITIAL_MOCK_STATE,
  budgetState: BUDGET_INITIAL_MOCK_STATE,
  expenseState: EXPENSE_INITIAL_MOCK_STATE,
  userState: USER_INITIAL_MOCK_STATE,
};
