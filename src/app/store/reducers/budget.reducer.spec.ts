import { BudgetState } from '../models/budget-state.model';
import * as BudgetActions from '../actions/budget.actions';
import {
  BUDGET_INITIAL_MOCK_STATE,
  BUDGET_LOADED_MOCK_STATE,
} from '../models/initial-mock-state';
import { budgetReducer } from './budget.reducer';

describe('Budget Reducer', () => {
  it('should set budgets on `loadBudgets`', () => {
    const inputBudget = { id: 1, name: 'IT Refresh', amount: 5000 };
    const action = BudgetActions.loadBudgetsSuccess({ budgets: [inputBudget] });
    const expected: BudgetState = {
      ...BUDGET_INITIAL_MOCK_STATE,
      budgets: [inputBudget],
      isLoading: false,
      errorMessage: null,
    };
    const actual = budgetReducer(BUDGET_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should add a budget on `addBudget`', () => {
    const inputBudget = BUDGET_LOADED_MOCK_STATE.budgets[0];
    const action = BudgetActions.addBudgetSuccess({ budget: inputBudget });
    const expected: BudgetState = {
      ...BUDGET_INITIAL_MOCK_STATE,
      budgets: [inputBudget],
      isLoading: false,
      errorMessage: null,
    };
    const actual = budgetReducer(BUDGET_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should modify a budget on `updateBudget`', () => {
    const inputBudget = { id: 1, name: 'Laptop Purchase', amount: 2000 };
    const action = BudgetActions.updateBudgetSuccess({
      budget: inputBudget,
    });
    const expected: BudgetState = {
      ...BUDGET_LOADED_MOCK_STATE,
      budgets: [BUDGET_LOADED_MOCK_STATE.budgets[1], inputBudget],
      isLoading: false,
      errorMessage: null,
    };
    const actual = budgetReducer(BUDGET_LOADED_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should remove a budget on `removeBudget`', () => {
    const inputBudget = BUDGET_LOADED_MOCK_STATE.budgets[0];
    const action = BudgetActions.removeBudgetSuccess({ budget: inputBudget });
    const expected: BudgetState = {
      ...BUDGET_LOADED_MOCK_STATE,
      budgets: [BUDGET_LOADED_MOCK_STATE.budgets[1]],
      isLoading: false,
      errorMessage: null,
    };
    const actual = budgetReducer(BUDGET_LOADED_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
