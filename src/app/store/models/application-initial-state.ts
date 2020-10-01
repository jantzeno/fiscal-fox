import { AUTH_INITIAL_STATE } from './auth-initial-state';
import { BUDGET_INITIAL_STATE } from '../../components/budget/store/models/budget-initial-state';
import { BUDGETS_INITIAL_STATE } from '../../components/budget/store/models/budgets-initial-state';
import { EXPENSE_INITIAL_STATE } from '../../components/expense/store/models/expense-initial-state';
import { EXPENSES_INITIAL_STATE } from '../../components/expense/store/models/expenses-initial-state';
import { USER_INITIAL_STATE } from '../../components/user/store/models/user-initial-state';
import { ApplicationState } from './application-state.model';

export const APP_INTIAL_STATE: ApplicationState = {
  router: null,
  authState: AUTH_INITIAL_STATE,
  budgetsState: BUDGETS_INITIAL_STATE,
  selectedBudget: BUDGET_INITIAL_STATE,
  expensesState: EXPENSES_INITIAL_STATE,
  selectedExpense: EXPENSE_INITIAL_STATE,
  userState: USER_INITIAL_STATE,
};
