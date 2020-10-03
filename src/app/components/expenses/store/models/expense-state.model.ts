import { Expense } from './expense.model';

export interface ExpenseState {
  readonly expense: Expense;
  readonly isLoading: boolean;
  readonly isLoaded: boolean;
}
