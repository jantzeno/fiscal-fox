import { RouterReducerState } from '@ngrx/router-store';
import { AuthState } from './auth-state.model';
import { BudgetsState } from '../../components/budget/store/models/budgets-state.model';
import { BudgetState } from '../..//components/budget/store/models/budget-state.model';
import { ExpensesState } from '../../components/expense/store/models/expenses-state.model';
import { ExpenseState } from '../../components/expense/store/models/expense-state.model';
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
