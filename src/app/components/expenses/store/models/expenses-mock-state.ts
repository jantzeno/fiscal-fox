import { EXPENSE_INITIAL_MOCK_STATE } from './expense-mock-state';
import { ExpensesState } from './expenses-state.model';

export const EXPENSES_INITIAL_MOCK_STATE: ExpensesState = {
  expenses: [EXPENSE_INITIAL_MOCK_STATE.expense],
  isLoading: false,
  isLoaded: false,
};
