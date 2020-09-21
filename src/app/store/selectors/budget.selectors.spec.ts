import { getBudgets, getBudgetById } from './budget.selectors';
import { BUDGET_LOADED_MOCK_STATE } from '../models/initial-mock-state';

const state = BUDGET_LOADED_MOCK_STATE;

describe('Budget Selectors', () => {
  it('should retrieve the budgets from budgetState', () => {
    expect(getBudgets.projector(state)).toBe(state.budgets);
  });

  it('should retrieve the selected budget from budgetState', () => {
    const requestedBudget = state.budgets[0];
    expect(
      getBudgetById.projector(state, { budgetId: requestedBudget._id })
    ).toBe(requestedBudget);
  });
});
