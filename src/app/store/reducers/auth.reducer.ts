import { createReducer, on, Action, State } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AuthState } from '../models/auth-state.model';

export const initialState: AuthState = {
  isAuth: false,
  token: null,
  isTokenExpired: false,
  isLoading: false,
  errorMessage: null,
};

const reducer = createReducer(
  initialState,
  on(AuthActions.requestRegistration, (state) => ({ ...state, loading: true })),
  on(AuthActions.requestRegistrationSuccess, (state) => ({
    ...state,
    isAuth: true,
    errorMessage: null,
  })),
  on(AuthActions.requestRegistrationFailure, (state, { error }) => ({
    ...state,
    isAuth: false,
    isLoading: false,
    errorMessage: error,
  })),
  on(AuthActions.requestLogin, (state) => ({ ...state, loading: true })),
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
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
