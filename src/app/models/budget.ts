import { Expense } from './expense';

export class Budget {
  private id: number;
  name: string;
  amount: number;
  expenses: Array<Expense>;

  constructor(name: string, amount: number, id: number = 0) {
    this.name = name;
    this.amount = amount;
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  calcExpenseTotal(): number {
    let total = 0;
    if (this.expenses) {
      for (let expense of this.expenses.values()) {
        total += expense.amount;
      }
    }
    return total;
  }

  calcRemainingBudget(): number {
    let remaining = 0;
    let expenses = this.calcExpenseTotal();
    if (this.amount) {
      remaining = this.amount - expenses;
    }
    return remaining;
  }
}
