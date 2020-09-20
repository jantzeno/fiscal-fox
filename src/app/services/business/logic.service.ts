import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  constructor() {}

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
