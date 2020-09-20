import { Budget } from '../../models/budget.model';

export interface BudgetState {
  readonly budgets: Budget[];
  readonly isLoading: boolean;
  readonly errorMessage: string;
}
