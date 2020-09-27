import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { AuthState } from '../models/auth-state.model';

export const selectAuthState = ({ authState }: ApplicationState) => authState;

export const getIsRegistered = createSelector(
  selectAuthState,
  ({ isRegistered }: AuthState) => isRegistered
);

export const getIsAuth = createSelector(
  selectAuthState,
  ({ isAuth }: AuthState) => isAuth
);

export const getToken = createSelector(
  selectAuthState,
  ({ token }: AuthState) => token
);
