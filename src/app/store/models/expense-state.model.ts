import { Expense } from '../../models/expense.model';

export interface ExpenseState {
  readonly expenses: Expense[];
  readonly isLoading: boolean;
  readonly errorMessage: string;
}
