export interface ExpenseResponse {
  _id: number;
  budgetId: number;
  name: string;
  amount: number;
}

export interface Expense extends ExpenseResponse {}
