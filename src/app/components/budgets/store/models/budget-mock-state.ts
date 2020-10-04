import { BudgetState } from './budget-state.model';
import { Budget } from './budget.model';

export const MOCK_BUDGET: Budget = { id: 1, name: 'IT Refresh', amount: 5000 };

export const BUDGET_INITIAL_MOCK_STATE: BudgetState = {
  budget: MOCK_BUDGET,
  isLoading: false,
  isLoaded: false,
};
