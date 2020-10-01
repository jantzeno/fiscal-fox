export interface AllBudgetsResponse {
  budgets: Budget[];
}

export interface BudgetResponse extends Budget {
  budget: Budget;
}

export interface Budget {
  id: number;
  name: string;
  amount: number;
}
