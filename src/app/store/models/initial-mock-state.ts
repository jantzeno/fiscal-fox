import { ApplicationState } from './application-state.model';
import { AuthState } from './auth-state.model';
import { BudgetState } from './budget-state.model';
import { ExpenseState } from './expense-state.model';
import { UserState } from './user-state.model';
import { Role } from '../../models/user.model';

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
    { _id: 1, name: 'IT Refresh', amount: 5000 },
    { _id: 2, name: 'Christmas Party', amount: 500 },
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
    { _id: 1, budgetId: 1, name: 'IT Refresh', amount: 5000 },
    { _id: 2, budgetId: 2, name: 'Christmas Party', amount: 500 },
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
    role: Role.PROGRAM_MANAGER,
  },
  isLoading: false,
  errorMessage: null,
};

export const APP_INTIAL_STATE: ApplicationState = {
  authState: AUTH_INITIAL_MOCK_STATE,
  budgetState: BUDGET_INITIAL_MOCK_STATE,
  expenseState: EXPENSE_INITIAL_MOCK_STATE,
  userState: USER_INITIAL_MOCK_STATE,
};
