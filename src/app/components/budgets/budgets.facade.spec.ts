import { MOCK_STORE$ } from '../../store/testing';
import { BudgetsFacade } from './budgets.facade';
import {
  createBudget,
  getSelectedBudgetId,
  loadBudgets,
  updateBudget,
  deleteBudget,
  loadBudget,
} from './store';
import {
  getSelectedExpenseId,
  loadExpensesByBudgetId,
} from '../expenses/store';
import { MOCK_EXPENSE } from '../expenses/store/models/expense-mock-state';
import { MOCK_BUDGET } from './store/models/budget-mock-state';

describe('BudgetsFacade', () => {
  let budgetsFacade: BudgetsFacade;

  beforeEach(() => {
    MOCK_STORE$.overrideSelector(getSelectedBudgetId, MOCK_BUDGET.id);
    MOCK_STORE$.overrideSelector(getSelectedExpenseId, MOCK_EXPENSE.id);
    budgetsFacade = new BudgetsFacade(MOCK_STORE$);
  });

  describe('#createBudget method', () => {
    it('should create a budget', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = createBudget({ budget: MOCK_BUDGET });
      budgetsFacade.createBudget(MOCK_BUDGET);
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#updateBudget method', () => {
    it('should update a budget', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = updateBudget({ budget: MOCK_BUDGET });
      budgetsFacade.updateBudget(MOCK_BUDGET);
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#deleteBudget method', () => {
    it('should delete a budget', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = deleteBudget({ budget: MOCK_BUDGET });
      budgetsFacade.deleteBudget(MOCK_BUDGET);
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#loadBudgets method', () => {
    it('should load budgets', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadBudgets();
      budgetsFacade.loadBudgets();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#loadBudget method', () => {
    it('should load a budget', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadBudget({ budgetId: MOCK_BUDGET.id });
      budgetsFacade.loadBudget();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#loadExpensesForBudget method', () => {
    it('should load budgets', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadExpensesByBudgetId({
        budgetId: MOCK_EXPENSE.budgetId,
      });
      budgetsFacade.loadExpensesForBudget();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#calcExpenseTotal method', () => {
    it('calculate total for input expenses', () => {
      let expenses = [MOCK_EXPENSE, MOCK_EXPENSE, MOCK_EXPENSE];
      let expectedTotal = MOCK_EXPENSE.amount * expenses.length;
      let total = budgetsFacade.calcExpenseTotal(expenses);
      expect(total).toEqual(expectedTotal);
    });
  });

  describe('#calcExpenseTotalForBudget method', () => {
    it('calculate expense total for input budget', () => {
      let expenses = [MOCK_EXPENSE, MOCK_EXPENSE, MOCK_EXPENSE];
      let expectedTotal = MOCK_EXPENSE.amount * expenses.length;
      let total = budgetsFacade.calcExpenseTotalForBudget(
        MOCK_BUDGET,
        expenses
      );
      expect(total).toEqual(expectedTotal);
    });
  });

  describe('#calcRemainingBudget method', () => {
    it('calculate budget amount minus expenses', () => {
      let expenses = [MOCK_EXPENSE, MOCK_EXPENSE, MOCK_EXPENSE];
      let expectedTotal =
        MOCK_BUDGET.amount - MOCK_EXPENSE.amount * expenses.length;
      let total = budgetsFacade.calcRemainingBudget(MOCK_BUDGET, expenses);
      expect(total).toEqual(expectedTotal);
    });
  });

  describe('#countExpenses method', () => {
    it('count the number of expenses for a budget', () => {
      let expenses = [MOCK_EXPENSE, MOCK_EXPENSE, MOCK_EXPENSE];
      let expectedCount = expenses.length;
      let total = budgetsFacade.countExpenses(MOCK_BUDGET, expenses);
      expect(total).toEqual(expectedCount);
    });
  });

  describe('#isDeficit method', () => {
    it('true if amount is less than or equal to zero (negative) value', () => {
      let isDeficit = budgetsFacade.isDeficit(0);
      expect(isDeficit).toBeTrue();

      isDeficit = budgetsFacade.isDeficit(-1);
      expect(isDeficit).toBeTrue();

      isDeficit = budgetsFacade.isDeficit(1);
      expect(isDeficit).toBeFalse();
    });
  });
});
