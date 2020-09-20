import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { authReducer } from './auth.reducer';
import { budgetReducer } from './budget.reducer';
import { expenseReducer } from './expense.reducer';
import { userReducer } from './user.reducer';

export const appState: ActionReducerMap<ApplicationState> = {
  authState: authReducer,
  budgetState: budgetReducer,
  expenseState: expenseReducer,
  userState: userReducer,
};
