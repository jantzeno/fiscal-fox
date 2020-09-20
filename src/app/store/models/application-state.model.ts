import { AuthState } from './auth-state.model';
import { BudgetState } from './budget-state.model';
import { ExpenseState } from './expense-state.model';
import { UserState } from './user-state.model';

export interface ApplicationState {
  readonly authState: AuthState;
  readonly budgetState: BudgetState;
  readonly expenseState: ExpenseState;
  readonly userState: UserState;
}
