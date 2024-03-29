import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { authReducer } from '../../components/auth/store/reducers/auth.reducer';
import { routerReducer } from '@ngrx/router-store';
import { budgetReducer } from '../../components/budgets/store/reducers/budget.reducer';
import { budgetsReducer } from '../../components/budgets/store/reducers/budgets.reducer';
import { expenseReducer } from '../../components/expenses/store/reducers/expense.reducer';
import { expensesReducer } from '../../components/expenses/store/reducers/expenses.reducer';
import { userReducer } from '../../components/user/store/reducers/user.reducer';

export const appState: ActionReducerMap<ApplicationState> = {
  router: routerReducer,
  authState: authReducer,
  budgetsState: budgetsReducer,
  selectedBudget: budgetReducer,
  expensesState: expensesReducer,
  selectedExpense: expenseReducer,
  userState: userReducer,
};
