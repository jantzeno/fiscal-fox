import { createSelector } from '@ngrx/store';
import { Params } from '@angular/router';
import { ApplicationState } from '../../../../store/models/application-state.model';
import { UserState } from '../models/user-state.model';
import { getRouteParams } from '../../../../store/selectors/router.selectors';

export const userState = ({ userState }: ApplicationState) => userState;

export const getUserLoaded = createSelector(
  userState,
  (state: UserState) => state?.isLoaded
);

export const getSelectedUser = createSelector(
  userState,
  (state: UserState) => state?.user
);

export const getSelectedUserId = createSelector(
  getRouteParams,
  (params: Params) => params['userId']
);
