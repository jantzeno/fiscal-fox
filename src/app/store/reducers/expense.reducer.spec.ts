import { ExpenseState } from '../models/expense-state.model';
import * as ExpenseActions from '../actions/expense.actions';
import {
  EXPENSE_INITIAL_MOCK_STATE,
  EXPENSE_LOADED_MOCK_STATE,
} from '../models/initial-mock-state';
import { expenseReducer } from './expense.reducer';

describe('Expense Reducer', () => {
  it('should set expenses on `loadExpenses`', () => {
    const action = ExpenseActions.loadExpenses();
    const expected: ExpenseState = {
      ...EXPENSE_INITIAL_MOCK_STATE,
      expenses: EXPENSE_INITIAL_MOCK_STATE.expenses,
      isLoading: true,
      errorMessage: null,
    };
    const actual = expenseReducer(EXPENSE_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should add a expense on `addExpense`', () => {
    const inputExpense = EXPENSE_LOADED_MOCK_STATE.expenses[0];
    const action = ExpenseActions.addExpenseSuccess({ expense: inputExpense });
    const expected: ExpenseState = {
      ...EXPENSE_INITIAL_MOCK_STATE,
      expenses: [inputExpense],
      isLoading: false,
      errorMessage: null,
    };
    const actual = expenseReducer(EXPENSE_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should modify a expense on `updateExpense`', () => {
    const inputExpense = EXPENSE_LOADED_MOCK_STATE.expenses[0];
    const action = ExpenseActions.updateExpenseSuccess({
      expense: inputExpense,
    });
    const expected: ExpenseState = {
      ...EXPENSE_LOADED_MOCK_STATE,
      expenses: [EXPENSE_LOADED_MOCK_STATE.expenses[1], inputExpense],
      isLoading: false,
      errorMessage: null,
    };
    const actual = expenseReducer(EXPENSE_LOADED_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should remove a expense on `removeExpense`', () => {
    const inputExpense = EXPENSE_LOADED_MOCK_STATE.expenses[0];
    const action = ExpenseActions.removeExpenseSuccess({
      expense: inputExpense,
    });
    const expected: ExpenseState = {
      ...EXPENSE_LOADED_MOCK_STATE,
      expenses: [EXPENSE_LOADED_MOCK_STATE.expenses[1]],
      isLoading: false,
      errorMessage: null,
    };
    const actual = expenseReducer(EXPENSE_LOADED_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
