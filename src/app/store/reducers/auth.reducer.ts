import { createReducer, on, Action, State } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AuthState } from '../models/auth-state.model';

export const initialState: AuthState = {
  isAuth: false,
  isRegistered: false,
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjAxMjQ2ODAzLCJleHAiOjE2MDEzMzMyMDN9.quhJD8una2miGUaCsMZvqtS9oKeFb-fyzhtjuYVPCT4',
  isLoading: false,
  errorMessage: '',
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
    isLoading: false,
    errorMessage: '',
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
    token: token,
    isLoading: false,
    errorMessage: '',
  })),
  on(AuthActions.requestLoginFailure, (state, { error }) => ({
    ...state,
    isAuth: false,
    isLoading: false,
    token: '',
    errorMessage: error,
  })),
  on(AuthActions.requestLogout, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.requestLogoutSuccess, (state, { isAuth }) => ({
    ...state,
    isAuth: isAuth,
    isLoading: false,
    errorMessage: '',
    token: '',
  })),
  on(AuthActions.requestLogoutFailure, (state, { error }) => ({
    ...state,
    isAuth: false,
    isLoading: false,
    token: '',
    errorMessage: error,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
