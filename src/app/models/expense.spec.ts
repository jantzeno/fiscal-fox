import { Expense } from './expense';

describe('Expense', () => {
  // Test Data
  let id = 1;
  let name = 'Printer Lease';
  let amount = 500;

  it('should create an instance', () => {
    expect(new Expense(name, amount, id)).toBeTruthy();
  });

  it('should provide a getter for the id', () => {
    let expense = new Expense(name, amount, id);
    expect(expense.getId()).toBe(id);
  });
});
