import { createReducer, on, Action, State } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AuthState } from '../models/auth-state.model';

export const initialState: AuthState = {
  isAuth: false,
  isRegistered: false,
  token: null,
  isLoading: false,
  errorMessage: null,
};

const reducer = createReducer(
  initialState,
  on(AuthActions.requestRegistration, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(AuthActions.requestRegistrationSuccess, (state, { isRegistered }) => ({
    ...state,
    isRegistered: isRegistered,
    isAuth: false,
    errorMessage: null,
  })),
  on(AuthActions.requestRegistrationFailure, (state, { error }) => ({
    ...state,
    isAuth: false,
    isLoading: false,
    errorMessage: error,
  })),
  on(AuthActions.requestLogin, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.requestLoginSuccess, (state, { token }) => ({
    ...state,
    isAuth: true,
    errorMessage: null,
    token: token,
  })),
  on(AuthActions.requestLoginFailure, (state, { error }) => ({
    ...state,
    isAuth: false,
    isLoading: false,
    token: null,
    errorMessage: error,
  })),
  on(AuthActions.requestLogout, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.requestLogoutSuccess, (state, { isLoggedOut }) => ({
    ...state,
    isAuth: isLoggedOut,
    errorMessage: null,
    token: false,
  })),
  on(AuthActions.requestLoginFailure, (state, { error }) => ({
    ...state,
    isAuth: false,
    isLoading: false,
    token: false,
    errorMessage: error,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
