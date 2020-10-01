import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { authReducer } from './auth.reducer';
import { routerReducer } from '@ngrx/router-store';
import { budgetReducer } from '../../components/budget/store/reducers/budget.reducer';
import { budgetsReducer } from '../../components/budget/store/reducers/budgets.reducer';
import { expenseReducer } from '../../components/expense/store/reducers/expense.reducer';
import { expensesReducer } from '../../components/expense/store/reducers/expenses.reducer';
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
