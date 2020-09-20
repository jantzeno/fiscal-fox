import { createReducer, on, Action } from '@ngrx/store';
import { UserState } from '../models/user-state.model';
import * as UserActions from '../actions/user.actions';

export const initialState: UserState = {
  user: null,
  isLoading: false,
  errorMessage: null,
};

const reducer = createReducer(
  initialState,
  // Get User
  on(UserActions.loadUser, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUserSucess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    errorMessage: null,
  })),
  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    isLoading: false,
    errorMessage: error,
  })),
  // Update User
  on(UserActions.updateUser, (state) => ({ ...state, loading: true })),
  on(UserActions.updateUserSucess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    errorMessage: null,
  })),
  on(UserActions.updateUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    isLoading: false,
    errorMessage: error,
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
