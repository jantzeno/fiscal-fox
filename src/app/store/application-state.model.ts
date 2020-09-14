import { Budget } from '../models/budget';
import { Expense } from '../models/expense';

export interface AppState {
  readonly authState: AuthState;
  readonly budgetState: BudgetState;
  readonly expenseState: ExpenseState;
}

export interface AuthState {
  isAuth: boolean;
  user: null;
}

export interface BudgetState {
  budgets: Map<number, Budget>;
}

export interface ExpenseState {
  expenses: Map<number, Expense>;
}
