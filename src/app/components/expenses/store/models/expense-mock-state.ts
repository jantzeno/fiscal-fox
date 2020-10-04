import { ExpenseState } from './expense-state.model';
import { Expense } from './expense.model';

export const MOCK_EXPENSE: Expense = {
  id: 1,
  budgetId: 1,
  name: 'Software License',
  amount: 2000,
};

export const EXPENSE_INITIAL_MOCK_STATE: ExpenseState = {
  expense: MOCK_EXPENSE,
  isLoading: false,
  isLoaded: false,
};
