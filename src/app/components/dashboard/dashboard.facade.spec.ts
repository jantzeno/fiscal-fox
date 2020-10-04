import { MOCK_STORE$ } from '../../store/testing';
import { DashboardFacade } from './dashboard.facade';
import { loadBudgets } from '../budgets/store';
import { loadExpenses } from '../expenses/store';
import { MOCK_BUDGET } from '../budgets/store/models/budget-mock-state';
import { MOCK_EXPENSE } from '../expenses/store/models/expense-mock-state';

describe('DashboardFacade', () => {
  let dashboardFacade: DashboardFacade;

  beforeEach(() => {
    dashboardFacade = new DashboardFacade(MOCK_STORE$);
  });

  describe('#loadBudgets method', () => {
    it('should load budgets', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadBudgets();
      dashboardFacade.loadBudgets();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#loadExpenses method', () => {
    it('should load budgets', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadExpenses();
      dashboardFacade.loadExpenses();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#filterExpensesForBudget method', () => {
    it('filters (finds) expenses of input budget', () => {
      let expenses = dashboardFacade.filterExpensesForBudget(MOCK_BUDGET, [
        MOCK_EXPENSE,
      ]);
      expect(expenses).toEqual([MOCK_EXPENSE]);
    });
  });

  describe('#calcExpenseTotal method', () => {
    it('calculate total for input expenses', () => {
      let expenses = [MOCK_EXPENSE, MOCK_EXPENSE, MOCK_EXPENSE];
      let expectedTotal = MOCK_EXPENSE.amount * expenses.length;
      let total = dashboardFacade.calcExpenseTotal(expenses);
      expect(total).toEqual(expectedTotal);
    });
  });

  describe('#calcExpenseTotalForBudget method', () => {
    it('calculate expense total for input budget', () => {
      let expenses = [MOCK_EXPENSE, MOCK_EXPENSE, MOCK_EXPENSE];
      let expectedTotal = MOCK_EXPENSE.amount * expenses.length;
      let total = dashboardFacade.calcExpenseTotalForBudget(
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
      let total = dashboardFacade.calcRemainingBudget(MOCK_BUDGET, expenses);
      expect(total).toEqual(expectedTotal);
    });
  });

  describe('#countExpenses method', () => {
    it('count the number of expenses for a budget', () => {
      let expenses = [MOCK_EXPENSE, MOCK_EXPENSE, MOCK_EXPENSE];
      let expectedCount = expenses.length;
      let total = dashboardFacade.countExpenses(MOCK_BUDGET, expenses);
      expect(total).toEqual(expectedCount);
    });
  });

  describe('#isDeficit method', () => {
    it('true if amount is less than or equal to zero (negative) value', () => {
      let isDeficit = dashboardFacade.isDeficit(0);
      expect(isDeficit).toBeTrue();

      isDeficit = dashboardFacade.isDeficit(-1);
      expect(isDeficit).toBeTrue();

      isDeficit = dashboardFacade.isDeficit(1);
      expect(isDeficit).toBeFalse();
    });
  });
});
