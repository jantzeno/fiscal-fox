import { getExpenses, getExpenseById } from './expense.selectors';
import { EXPENSE_LOADED_MOCK_STATE } from '../models/initial-mock-state';

const state = EXPENSE_LOADED_MOCK_STATE;

describe('Expense Selectors', () => {
  it('should retrieve the expenses from expenseState', () => {
    expect(getExpenses.projector(state)).toBe(state.expenses);
  });

  it('should retrieve the selected expense from expenseState', () => {
    const requestedExpense = state.expenses[0];
    expect(
      getExpenseById.projector(state, { expenseId: requestedExpense._id })
    ).toBe(requestedExpense);
  });
});
