import { BUDGETS_INITIAL_MOCK_STATE } from '../models/budgets-mock-state';
import { BUDGET_INITIAL_MOCK_STATE } from '../models/budget-mock-state';
import * as BudgetSelectors from '../selectors';

const budgetsState = BUDGETS_INITIAL_MOCK_STATE;
const budgetState = BUDGET_INITIAL_MOCK_STATE;

describe('Budgets selectors', () => {
  it('should retrieve budgets[] from BudgetsState', () => {
    expect(BudgetSelectors.getBudgets.projector(budgetsState)).toBe(
      budgetsState.budgets
    );
  });

  it('should retrieve isLoaded from BudgetsState', () => {
    expect(BudgetSelectors.getBudgetsLoaded.projector(budgetsState)).toBe(
      budgetsState.isLoaded
    );
  });

  it('should retrieve selected budget from BudgetState', () => {
    expect(BudgetSelectors.getSelectedBudget.projector(budgetState)).toBe(
      budgetState.budget
    );
  });
});
