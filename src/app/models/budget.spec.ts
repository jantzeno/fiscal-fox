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
  let expenses: Map<number, Expense> = new Map([
    [ex1Id, ex1],
    [ex2Id, ex2],
    [ex3Id, ex3],
  ]);

  // Budget Test Data
  let id = 1;
  let name = 'IT Services';
  let amount = compAmt + printAmt + softAmt;

  it('should create an instance', () => {
    expect(new Budget(name, amount, id)).toBeTruthy();
  });

  let budget = new Budget(name, amount, id);

  it('should take and return an map of expenses', () => {
    budget.expenses = expenses;
    expect(budget.expenses.size).toBe(3);
    expect(budget.expenses.get(ex1Id)).toBe(ex1);
    expect(budget.expenses.get(ex2Id)).toBe(ex2);
    expect(budget.expenses.get(ex3Id)).toBe(ex3);
  });

  it('should provide a getter for the id', () => {
    expect(budget.getId()).toBe(id);
  });
});
