import { createAction, props, union } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUser = createAction('[User] Get User');
export const loadUserSucess = createAction(
  '[API] Load User Success',
  props<{ user: User }>()
);
export const loadUserFailure = createAction(
  '[API] Load User Failure',
  props<{ error: any }>()
);

export const updateUser = createAction('[User] Update User');
export const updateUserSucess = createAction(
  '[API] Update User Success',
  props<{ user: User }>()
);
export const updateUserFailure = createAction(
  '[API] Update User Failure',
  props<{ error: any }>()
);

const userActions = union({
  loadUser,
  loadUserSucess,
  loadUserFailure,
  updateUser,
  updateUserSucess,
  updateUserFailure,
});

export type UserActionTypes = typeof userActions;
