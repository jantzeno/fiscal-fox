import { createReducer, on, Action, State } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AuthState } from '../models/auth-state.model';

export const initialState: AuthState = {
  isAuth: false,
  isRegistered: false,
  token: 'invalid',
  isLoading: false,
};

const reducer = createReducer(
  initialState,

  on(AuthActions.requestRegistration, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(AuthActions.requestRegistrationSuccess, (state, { isRegistered }) => ({
    ...state,
    isRegistered,
    isAuth: false,
    isLoading: false,
  })),
  on(AuthActions.requestRegistrationFailure, (state, { error }) => ({
    ...state,
    isAuth: false,
    isLoading: false,
  })),

  on(AuthActions.requestLogin, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.requestLoginSuccess, (state, { token }) => ({
    ...state,
    isAuth: true,
    token,
    isLoading: false,
  })),
  on(AuthActions.requestLoginFailure, (state, { error }) => ({
    ...state,
    isAuth: false,
    isLoading: false,
    token: initialState.token,
  })),

  on(AuthActions.requestTokenCheck, (state, { token }) => ({
    ...state,
    token,
    isLoading: true,
  })),
  on(AuthActions.requestTokenCheckSuccess, (state) => ({
    ...state,
    isAuth: true,
    isLoading: false,
  })),
  on(AuthActions.requestTokenCheckFailure, (state, { error }) => ({
    ...state,
    isAuth: false,
    isLoading: false,
    token: initialState.token,
  })),

  on(AuthActions.requestLogout, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.requestLogoutSuccess, (state, { isAuth }) => ({
    ...state,
    isAuth,
    isLoading: false,
    token: initialState.token,
  })),
  on(AuthActions.requestLogoutFailure, (state, { error }) => ({
    ...state,
    isAuth: false,
    isLoading: false,
    token: initialState.token,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
