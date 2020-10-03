import { Budget } from '../../../components/budgets/store/models/budget.model';

export interface BudgetsResponse {
  budgets: Budget[];
}

export interface BudgetResponse {
  budget: Budget;
}
