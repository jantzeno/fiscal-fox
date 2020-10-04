import { MOCK_STORE$ } from '../../store/testing';
import { BudgetsFacade } from './budgets.facade';
import { loadBudgets } from './store';
import { loadExpenses } from '../expenses/store';

describe('BudgetesFacade', () => {
  let budgetsFacade: BudgetsFacade;

  beforeEach(() => {
    budgetsFacade = new BudgetsFacade(MOCK_STORE$);
  });

  describe('#loadBudgets method', () => {
    it('should load budgets', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadBudgets();
      budgetsFacade.loadBudgets();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#loadExpenses method', () => {
    it('should load budgets', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadExpenses();
      budgetsFacade.loadExpenses();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });
});
