import { createAction, props, union } from '@ngrx/store';
import { User } from '../../models/user.model';

// Register new User
export const requestRegistration = createAction(
  '[API] Request Registration',
  props<{ user: User }>()
);
export const requestRegistrationSuccess = createAction(
  '[API] Request Registration Success',
  props<{ success: boolean }>()
);
export const requestRegistrationFailure = createAction(
  '[API] Request Registration Failure',
  props<{ error: any }>()
);

// Login existing User
export const requestLogin = createAction(
  '[API] Request Login',
  props<{ username: string; password: string }>()
);
export const requestLoginSuccess = createAction(
  '[API] Request Login Success',
  props<{ token: string }>()
);
export const requestLoginFailure = createAction(
  '[API] Request Login Failure',
  props<{ error: any }>()
);

const authActions = union({
  requestRegistration,
  requestRegistrationSuccess,
  requestRegistrationFailure,
  requestLogin,
  requestLoginSuccess,
  requestLoginFailure,
});

export type AuthActionTypes = typeof authActions;
