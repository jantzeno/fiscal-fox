import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../application-state.model';
import { authReducer } from './auth.reducer';
import { budgetReducer } from './budget.reducer';
import { expenseReducer } from './expense.reducer';

export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer,
  budgetState: budgetReducer,
  expenseState: expenseReducer,
};
