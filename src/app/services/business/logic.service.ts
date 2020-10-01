import { Injectable } from '@angular/core';
import { Budget } from '../../components/budget/store/models/budget.model';
import { Expense } from '../../components/expense/store/models/expense.model';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  constructor() {}

  filterExpensesForBudget(budget: Budget, expenses: Expense[]): Expense[] {
    return Object.values(expenses).filter(
      (expense) => expense.budgetId === budget.id
    );
  }

  calcExpenseTotal(expenses: Expense[]): number {
    let total = 0;
    if (expenses) {
      for (let expense of expenses) {
        total += expense.amount;
      }
    }
    return total;
  }

  calcExpenseTotalForBudget(budget: Budget, expenses: Expense[]): number {
    let total = 0;
    let budgetExpenses = this.filterExpensesForBudget(budget, expenses);
    total = this.calcExpenseTotal(budgetExpenses);
    return total;
  }

  calcRemainingBudget(budget: Budget, expenses: Expense[]): number {
    let remaining = 0;
    let budgetExpenses = this.filterExpensesForBudget(budget, expenses);
    let expenseTotal = this.calcExpenseTotal(budgetExpenses);
    if (budget.amount) {
      remaining = budget.amount - expenseTotal;
    }
    return remaining;
  }

  countExpenses(budget: Budget, expenses: Expense[]): number {
    let count = -1;
    if (budget && expenses) {
      count = this.filterExpensesForBudget(budget, expenses).length;
    }
    return count;
  }
}
