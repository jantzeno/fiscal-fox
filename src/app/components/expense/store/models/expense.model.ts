export interface ExpensesResponse {
  expenses: Expense[];
}

export interface ExpenseResponse extends Expense {
  expense: Expense;
}

export interface Expense {
  id: number;
  budgetId: number;
  name: string;
  amount: number;
}
