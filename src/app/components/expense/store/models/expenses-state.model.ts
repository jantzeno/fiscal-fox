import { Expense } from './expense.model';

export interface ExpensesState {
  readonly expenses: Expense[];
  readonly isLoading: boolean;
  readonly isLoaded: boolean;
}
