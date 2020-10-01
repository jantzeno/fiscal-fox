import { ExpensesState } from '../models/expenses-state.model';
import * as ExpenseActions from '../actions/expense.actions';
import { EXPENSES_INITIAL_MOCK_STATE } from '../models/expenses-mock-state';
import { expensesReducer } from './expenses.reducer';

describe('Expenses Reducer', () => {
  it('should load expenses on `loadExpenses`', () => {
    const action = ExpenseActions.loadExpenses();
    const expected: ExpensesState = {
      ...EXPENSES_INITIAL_MOCK_STATE,
      isLoading: true,
      isLoaded: false,
    };
    const actual = expensesReducer(EXPENSES_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should get expenses on `loadExpensesSuccessful`', () => {
    const action = ExpenseActions.loadExpensesSuccess({
      expenses: EXPENSES_INITIAL_MOCK_STATE.expenses,
    });
    const expected: ExpensesState = {
      ...EXPENSES_INITIAL_MOCK_STATE,
      isLoading: false,
      isLoaded: true,
    };
    const actual = expensesReducer(EXPENSES_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set error on `loadExpensesFailure`', () => {
    const action = ExpenseActions.loadExpensesFailure({ error: 'Nope.' });
    const expected: ExpensesState = {
      ...EXPENSES_INITIAL_MOCK_STATE,
      isLoading: false,
      isLoaded: false,
    };
    const actual = expensesReducer(EXPENSES_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
