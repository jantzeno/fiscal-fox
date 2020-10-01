import { Budget } from './budget.model';

export interface BudgetsState {
  readonly budgets: Budget[];
  readonly isLoading: boolean;
  readonly isLoaded: boolean;
}
