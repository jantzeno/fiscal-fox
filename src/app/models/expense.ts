export interface IExpense {
  id: number;
  budgetId: number;
  name: string;
  amount: number;
}

export class Expense implements IExpense {
  id: number;
  budgetId: number;
  name: string;
  amount: number;

  constructor(name: string, amount: number, id: number = -1, budgetId = -1) {
    this.id = id;
    this.budgetId - budgetId;
    this.name = name;
    this.amount = amount;
  }
}
