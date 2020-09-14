import { AppState, AuthState } from '../application-state.model';
import { createSelector, State } from '@ngrx/store';

export const selectAuthState = ({ authState }: AppState) => authState;

export const isLoggedIn = createSelector(
  selectAuthState,
  ({ isAuth }: AuthState) => isAuth
);

export const whoIsUser = createSelector(
  selectAuthState,
  ({ user }: AuthState) => user
);
