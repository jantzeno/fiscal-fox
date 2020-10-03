import { Expense } from '../../../components/expenses/store/models/expense.model';

export interface ExpensesResponse {
  expenses: Expense[];
}

export interface ExpenseResponse {
  expense: Expense;
}
