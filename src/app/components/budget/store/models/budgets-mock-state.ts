import { BUDGET_INITIAL_MOCK_STATE } from './budget-mock-state';
import { BudgetsState } from './budgets-state.model';

export const BUDGETS_INITIAL_MOCK_STATE: BudgetsState = {
  budgets: [BUDGET_INITIAL_MOCK_STATE.budget],
  isLoading: false,
  isLoaded: false,
};
