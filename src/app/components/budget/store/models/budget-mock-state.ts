import { BudgetState } from './budget-state.model';

export const BUDGET_INITIAL_MOCK_STATE: BudgetState = {
  budget: { id: 1, name: 'IT Refresh', amount: 5000 },
  isLoading: false,
  isLoaded: false,
};
