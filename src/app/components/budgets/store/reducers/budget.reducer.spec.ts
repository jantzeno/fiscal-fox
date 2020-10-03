import { BudgetState } from '../models/budget-state.model';
import * as BudgetActions from '../actions/budget.actions';
import { BUDGET_INITIAL_MOCK_STATE } from '../models/budget-mock-state';
import { budgetReducer } from './budget.reducer';

describe('Budget Reducer', () => {
  it('should load a budget on `loadBudget`', () => {
    const action = BudgetActions.loadBudget({
      budgetId: BUDGET_INITIAL_MOCK_STATE.budget.id,
    });
    const expected: BudgetState = {
      ...BUDGET_INITIAL_MOCK_STATE,
      isLoading: true,
      isLoaded: false,
    };
    const actual = budgetReducer(BUDGET_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should get a budget on `loadBudgetSuccessful`', () => {
    const action = BudgetActions.loadBudgetSuccess({
      budget: BUDGET_INITIAL_MOCK_STATE.budget,
    });
    const expected: BudgetState = {
      ...BUDGET_INITIAL_MOCK_STATE,
      isLoading: false,
      isLoaded: true,
    };
    const actual = budgetReducer(BUDGET_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set error on `loadBudgetFailure`', () => {
    const action = BudgetActions.loadBudgetFailure({ error: 'Nope.' });
    const expected: BudgetState = {
      ...BUDGET_INITIAL_MOCK_STATE,
      isLoading: false,
      isLoaded: false,
    };
    const actual = budgetReducer(BUDGET_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
