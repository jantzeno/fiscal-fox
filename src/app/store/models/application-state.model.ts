import { RouterReducerState } from '@ngrx/router-store';
import { AuthState } from './auth-state.model';
import { BudgetsState } from '../../components/budgets/store/models/budgets-state.model';
import { BudgetState } from '../..//components/budgets/store/models/budget-state.model';
import { ExpensesState } from '../../components/expenses/store/models/expenses-state.model';
import { ExpenseState } from '../../components/expenses/store/models/expense-state.model';
import { UserState } from '../../components/user/store/models/user-state.model';
import { RouterStateUrl } from './router.models';

export interface ApplicationState {
  readonly router: RouterReducerState<RouterStateUrl>;
  readonly authState: AuthState;
  readonly budgetsState: BudgetsState;
  readonly selectedBudget: BudgetState;
  readonly expensesState: ExpensesState;
  readonly selectedExpense: ExpenseState;
  readonly userState: UserState;
}
