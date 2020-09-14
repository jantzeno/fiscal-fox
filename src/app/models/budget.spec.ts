import { Budget } from './budget';
import { Expense } from './expense';

describe('Budget', () => {
  // Expense Test Data
  let compAmt = 10000;
  let printAmt = 500;
  let softAmt = 5000;
  let ex1Id = 1;
  let ex2Id = 2;
  let ex3Id = 3;
  let ex1 = new Expense('Computers', compAmt, ex1Id);
  let ex2 = new Expense('Printer', printAmt, ex2Id);
  let ex3 = new Expense('Inventory Software Renewal', softAmt, ex3Id);

  // Budget Test Data
  let budId = 1;
  let budName = 'IT Services';
  const budRemain = 500;
  let budAmount = budRemain + compAmt + printAmt + softAmt;

  it('should create an instance', () => {
    expect(new Budget(budName, budAmount, budId)).toBeTruthy();
  });

  // TODO: Figure out where to put this
  // it('should calcExpenseTotal', () => {
  //   let budget = new Budget(budName, budAmount, budId);
  //   budget.expenses = expenses;
  //   expect(budget.calcExpenseTotal()).toBe(compAmt + printAmt + softAmt);
  // });

  // it('should calcRemainingBudget', () => {
  //   let budget = new Budget(budName, budAmount, budId);
  //   budget.expenses = expenses;
  //   expect(budget.calcRemainingBudget()).toBe(budRemain);
  // });
});
