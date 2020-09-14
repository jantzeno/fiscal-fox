import { Expense } from './expense';

describe('Expense', () => {
  it('should create an instance', () => {
    expect(new Expense('expense', 1000)).toBeTruthy();
  });
});
