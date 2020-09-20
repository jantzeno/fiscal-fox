import { getExpenses } from './expense.selectors';
import { EXPENSE_INITIAL_MOCK_STATE } from '../models/initial-mock-state';

const state = EXPENSE_INITIAL_MOCK_STATE;

describe('Expense Selectors', () => {
  it('should retrieve the expenses from expenseState', () => {
    expect(getExpenses.projector(state)).toBe(state.expenses);
  });
});
