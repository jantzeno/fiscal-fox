import { MOCK_EXPENSE } from './expense-mock-state';
import { ExpensesState } from './expenses-state.model';

export const EXPENSES_INITIAL_MOCK_STATE: ExpensesState = {
  expenses: [MOCK_EXPENSE],
  isLoading: false,
  isLoaded: false,
};
