import { ExpenseState } from '../models/expense-state.model';
import * as ExpenseActions from '../actions/expense.actions';
import { EXPENSE_INITIAL_MOCK_STATE } from '../models/expense-mock-state';
import { expenseReducer } from './expense.reducer';

describe('Expense Reducer', () => {
  it('should load a expense on `loadExpense`', () => {
    const action = ExpenseActions.loadExpense({
      expenseId: EXPENSE_INITIAL_MOCK_STATE.expense.id,
    });
    const expected: ExpenseState = {
      ...EXPENSE_INITIAL_MOCK_STATE,
      isLoading: true,
      isLoaded: false,
    };
    const actual = expenseReducer(EXPENSE_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should get a expense on `loadExpenseSuccessful`', () => {
    const action = ExpenseActions.loadExpenseSuccess({
      expense: EXPENSE_INITIAL_MOCK_STATE.expense,
    });
    const expected: ExpenseState = {
      ...EXPENSE_INITIAL_MOCK_STATE,
      isLoading: false,
      isLoaded: true,
    };
    const actual = expenseReducer(EXPENSE_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set error on `loadExpenseFailure`', () => {
    const action = ExpenseActions.loadExpenseFailure({ error: 'Nope.' });
    const expected: ExpenseState = {
      ...EXPENSE_INITIAL_MOCK_STATE,
      isLoading: false,
      isLoaded: false,
    };
    const actual = expenseReducer(EXPENSE_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
