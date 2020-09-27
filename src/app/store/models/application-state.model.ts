import { RouterReducerState } from '@ngrx/router-store';
import { AuthState } from './auth-state.model';
import { BudgetState } from './budget-state.model';
import { ExpenseState } from './expense-state.model';
import { UserState } from './user-state.model';
import { RouterStateUrl } from './router.models';

export interface ApplicationState {
  readonly router: RouterReducerState<RouterStateUrl>;
  readonly authState: AuthState;
  readonly budgetState: BudgetState;
  readonly expenseState: ExpenseState;
  readonly userState: UserState;
}
