import { MOCK_STORE$ } from '../../store/testing';
import { ExpensesFacade } from './expenses.facade';
import {
  createExpense,
  deleteExpense,
  getSelectedExpenseId,
  loadExpense,
  updateExpense,
} from './store';
import { getSelectedBudgetId } from '../budgets/store';
import { MOCK_EXPENSE } from '../expenses/store/models/expense-mock-state';
import { MOCK_BUDGET } from '../budgets/store/models/budget-mock-state';

describe('ExpenseesFacade', () => {
  let expensesFacade: ExpensesFacade;

  beforeEach(() => {
    MOCK_STORE$.overrideSelector(getSelectedBudgetId, MOCK_BUDGET.id);
    MOCK_STORE$.overrideSelector(getSelectedExpenseId, MOCK_EXPENSE.id);
    expensesFacade = new ExpensesFacade(MOCK_STORE$);
  });

  describe('#createExpense method', () => {
    it('should create a expense', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = createExpense({ expense: MOCK_EXPENSE });
      expensesFacade.createExpense(MOCK_EXPENSE);
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#updateExpense method', () => {
    it('should update a expense', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = updateExpense({ expense: MOCK_EXPENSE });
      expensesFacade.updateExpense(MOCK_EXPENSE);
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#deleteExpense method', () => {
    it('should delete a expense', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = deleteExpense({ expense: MOCK_EXPENSE });
      expensesFacade.deleteExpense(MOCK_EXPENSE);
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#loadExpense method', () => {
    it('should load expense', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadExpense({ expenseId: MOCK_EXPENSE.id });
      expensesFacade.loadExpense();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });
});
