import { BudgetsState } from '../models/budgets-state.model';
import * as BudgetActions from '../actions/budget.actions';
import { BUDGETS_INITIAL_MOCK_STATE } from '../models/budgets-mock-state';
import { budgetsReducer } from './budgets.reducer';

describe('Budgets Reducer', () => {
  it('should load budgets on `loadBudgets`', () => {
    const action = BudgetActions.loadBudgets();
    const expected: BudgetsState = {
      ...BUDGETS_INITIAL_MOCK_STATE,
      isLoading: true,
      isLoaded: false,
    };
    const actual = budgetsReducer(BUDGETS_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should get budgets on `loadBudgetsSuccessful`', () => {
    const action = BudgetActions.loadBudgetsSuccess({
      budgets: BUDGETS_INITIAL_MOCK_STATE.budgets,
    });
    const expected: BudgetsState = {
      ...BUDGETS_INITIAL_MOCK_STATE,
      isLoading: false,
      isLoaded: true,
    };
    const actual = budgetsReducer(BUDGETS_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set error on `loadBudgetsFailure`', () => {
    const action = BudgetActions.loadBudgetsFailure({ error: 'Nope.' });
    const expected: BudgetsState = {
      ...BUDGETS_INITIAL_MOCK_STATE,
      isLoading: false,
      isLoaded: false,
    };
    const actual = budgetsReducer(BUDGETS_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
