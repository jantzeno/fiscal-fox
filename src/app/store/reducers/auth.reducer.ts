import { createReducer, on, Action, State } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AppState, AuthState } from '../application-state.model';

export const initialState: AuthState = {
  isAuth: false,
  user: null,
};

const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    isAuth: true,
  })),

  on(AuthActions.logout, (state) => ({
    ...state,
    isAuth: false,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
