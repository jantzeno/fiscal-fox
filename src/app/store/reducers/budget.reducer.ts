import { createReducer, on, Action } from '@ngrx/store';
import { Budget } from '../../models/budget.model';
import * as BudgetActions from '../actions/budget.actions';
import { BudgetState } from '../models/budget-state.model';

export const initialState: BudgetState = {
  budgets: [],
  isLoading: false,
  errorMessage: null,
};

const reducer = createReducer(
  initialState,
  // Load Budgets
  on(BudgetActions.loadBudgets, (state) => ({ ...state, isLoading: true })),
  on(BudgetActions.loadBudgetsSuccess, (state, { budgets }) => ({
    ...state,
    budgets,
    isLoading: false,
    errorMessage: null,
  })),
  on(BudgetActions.loadBudgetsFailure, (state, { error }) => ({
    ...state,
    user: null,
    isLoading: false,
    errorMessage: error,
  })),
  // Add Budget
  on(BudgetActions.addBudget, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(BudgetActions.addBudgetSuccess, (state, { budget }) => ({
    ...state,
    budgets: [...state.budgets, budget],
    loading: false,
    errorMessage: null,
  })),
  on(BudgetActions.addBudgetFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    errorMessage: error,
  })),
  // Update Budget
  on(BudgetActions.updateBudget, (state) => ({ ...state, loading: true })),
  on(BudgetActions.updateBudgetSuccess, (state, { index, budget }) => {
    // Remove outdated budget item
    const modBudgets: Array<Budget> = state.budgets.filter(
      (b) => b._id !== budget._id
    );
    return {
      ...state,
      // budgets: [...modBudgets, budget],
      // Skip over index
      // budgets: [
      //   ...state.budgets.slice(0, index),
      //   ...state.budgets.slice(index + 1),
      // ],
      isLoading: false,
      errorMessage: null,
    };
  }),
  on(BudgetActions.updateBudgetFailure, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      errorMessage: error,
    };
  }),
  // Delete Budget
  on(BudgetActions.removeBudget, (state) => ({ ...state, loading: true })),
  on(BudgetActions.removeBudgetSuccess, (state, { budget }) => ({
    ...state,
    budgets: state.budgets.filter((b) => b._id !== budget._id),
    isLoading: false,
    errorMessage: null,
  })),
  on(BudgetActions.removeBudgetFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    errorMessage: error,
  }))
);

export function budgetReducer(state: BudgetState | undefined, action: Action) {
  return reducer(state, action);
}
