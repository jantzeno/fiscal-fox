import { createReducer, on, Action } from '@ngrx/store';
import { UserState } from '../models/user-state.model';
import * as UserActions from '../actions/user.actions';

export const initialState: UserState = {
  user: null,
  isLoading: false,
  isLoaded: false,
};

const reducer = createReducer(
  initialState,
  // Get User
  on(UserActions.loadUser, (state) => ({ ...state, isLoading: true })),
  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    isLoaded: true,
  })),
  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    isLoading: false,
    isLoaded: false,
  })),
  // Update User
  on(UserActions.updateUser, (state) => ({ ...state, isLoading: true })),
  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    isLoaded: true,
  })),
  on(UserActions.updateUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    isLoading: false,
    isLoaded: false,
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
