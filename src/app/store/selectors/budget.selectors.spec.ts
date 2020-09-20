import { getBudgets } from './budget.selectors';
import { BUDGET_INITIAL_MOCK_STATE } from '../models/initial-mock-state';

const state = BUDGET_INITIAL_MOCK_STATE;

describe('Budget Selectors', () => {
  it('should retrieve the budgets from budgetState', () => {
    expect(getBudgets.projector(state)).toBe(state.budgets);
  });
});
