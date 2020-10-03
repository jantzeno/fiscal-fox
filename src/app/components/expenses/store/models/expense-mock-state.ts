import { ExpenseState } from './expense-state.model';

export const EXPENSE_INITIAL_MOCK_STATE: ExpenseState = {
  expense: { id: 1, budgetId: 1, name: 'Software License', amount: 2000 },
  isLoading: false,
  isLoaded: false,
};
