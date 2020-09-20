import { createSelector, State } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { UserState } from '../models/user-state.model';

export const selectUserState = ({ userState }: ApplicationState) => userState;

export const getUser = createSelector(
  selectUserState,
  ({ user }: UserState) => user
);
