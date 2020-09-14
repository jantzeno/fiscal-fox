export interface IBudget {
  id: number;
  name: string;
  amount: number;
}

export class Budget implements IBudget {
  id: number;
  name: string;
  amount: number;

  constructor(name: string, amount: number, id: number = -1) {
    this.name = name;
    this.amount = amount;
    this.id = id;
  }

  // TODO: Figure out wher to put this
  // calcExpenseTotal(): number {
  //   let total = 0;
  //   if (this.expenses) {
  //     for (let expense of this.expenses.values()) {
  //       total += expense.amount;
  //     }
  //   }
  //   return total;
  // }

  // calcRemainingBudget(): number {
  //   let remaining = 0;
  //   let expenses = this.calcExpenseTotal();
  //   if (this.amount) {
  //     remaining = this.amount - expenses;
  //   }
  //   return remaining;
  // }
}
