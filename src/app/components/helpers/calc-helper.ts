import { Budget } from '../budgets/store/models/budget.model';
import { Expense } from '../expenses/store/models/expense.model';

export module CalcHelper {
  export function filterExpensesForBudget(
    budget: Budget,
    expenses: Expense[]
  ): Expense[] {
    return Object.values(expenses).filter(
      (expense) => expense.budgetId === budget.id
    );
  }

  export function calcExpenseTotal(expenses: Expense[]): number {
    let total = 0;
    if (expenses) {
      for (let expense of expenses) {
        total += expense.amount;
      }
    }
    return total;
  }

  export function calcExpenseTotalForBudget(
    budget: Budget,
    expenses: Expense[]
  ): number {
    let total = 0;
    let budgetExpenses = this.filterExpensesForBudget(budget, expenses);
    total = this.calcExpenseTotal(budgetExpenses);
    return total;
  }

  export function calcRemainingBudget(
    budget: Budget,
    expenses: Expense[]
  ): number {
    let remaining = 0;
    let budgetExpenses = this.filterExpensesForBudget(budget, expenses);
    let expenseTotal = this.calcExpenseTotal(budgetExpenses);
    if (budget.amount) {
      remaining = budget.amount - expenseTotal;
    }
    return remaining;
  }

  export function countExpenses(budget: Budget, expenses: Expense[]): number {
    let count = -1;
    if (budget && expenses) {
      count = this.filterExpensesForBudget(budget, expenses).length;
    }
    return count;
  }

  export function isDeficit(amount: Number): boolean {
    let deficit = false;
    if (amount <= 0) {
      deficit = true;
    }
    return deficit;
  }
}
