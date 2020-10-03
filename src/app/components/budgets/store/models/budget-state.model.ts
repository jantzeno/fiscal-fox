import { Budget } from './budget.model';

export interface BudgetState {
  readonly budget: Budget;
  readonly isLoading: boolean;
  readonly isLoaded: boolean;
}
