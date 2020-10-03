import { ApplicationState } from './application-state.model';
import { AUTH_INITIAL_MOCK_STATE } from './auth-mock-state';
import { BUDGET_INITIAL_MOCK_STATE } from 'src/app/components/budgets/store/models/budget-mock-state';
import { BUDGETS_INITIAL_MOCK_STATE } from 'src/app/components/budgets/store/models/budgets-mock-state';
import { EXPENSE_INITIAL_MOCK_STATE } from 'src/app/components/expenses/store/models/expense-mock-state';
import { EXPENSES_INITIAL_MOCK_STATE } from 'src/app/components/expenses/store/models/expenses-mock-state';
import { USER_INITIAL_MOCK_STATE } from 'src/app/components/user/store/models/user-mock-state';

export const APP_INTIAL_MOCK_STATE: ApplicationState = {
  router: null,
  authState: AUTH_INITIAL_MOCK_STATE,
  budgetsState: BUDGETS_INITIAL_MOCK_STATE,
  selectedBudget: BUDGET_INITIAL_MOCK_STATE,
  expensesState: EXPENSES_INITIAL_MOCK_STATE,
  selectedExpense: EXPENSE_INITIAL_MOCK_STATE,
  userState: USER_INITIAL_MOCK_STATE,
};
