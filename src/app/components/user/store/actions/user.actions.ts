import { createAction, props, union } from '@ngrx/store';
import { User } from '../models/user.model';

export const loadUser = createAction('[User] Get User');
export const loadUserSuccess = createAction(
  '[API] Load User Success',
  props<{ user: User }>()
);
export const loadUserFailure = createAction(
  '[API] Load User Failure',
  props<{ error: any }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{ user: User }>()
);
export const updateUserSuccess = createAction(
  '[API] Update User Success',
  props<{ user: User }>()
);
export const updateUserFailure = createAction(
  '[API] Update User Failure',
  props<{ error: any }>()
);

const userActions = union({
  loadUser,
  loadUserSuccess,
  loadUserFailure,
  updateUser,
  updateUserSuccess,
  updateUserFailure,
});

export type UserActionTypes = typeof userActions;
