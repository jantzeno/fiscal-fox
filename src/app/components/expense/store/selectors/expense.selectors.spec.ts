import { EXPENSES_INITIAL_MOCK_STATE } from '../models/expenses-mock-state';
import { EXPENSE_INITIAL_MOCK_STATE } from '../models/expense-mock-state';
import * as ExpenseSelectors from '../selectors';

const expensesState = EXPENSES_INITIAL_MOCK_STATE;
const expenseState = EXPENSE_INITIAL_MOCK_STATE;

describe('Expenses selectors', () => {
  it('should retrieve expenses[] from ExpensesState', () => {
    expect(ExpenseSelectors.getExpenses.projector(expensesState)).toBe(
      expensesState.expenses
    );
  });

  it('should retrieve isLoaded from ExpensesState', () => {
    expect(ExpenseSelectors.getExpensesLoaded.projector(expensesState)).toBe(
      expensesState.isLoaded
    );
  });

  it('should retrieve selected expense from ExpenseState', () => {
    expect(ExpenseSelectors.getSelectedExpense.projector(expenseState)).toBe(
      expenseState.expense
    );
  });
});
