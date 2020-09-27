import { createAction, props, union } from '@ngrx/store';
import { User } from '../../models/user.model';

// Register new User
export const requestRegistration = createAction(
  '[API] Request Registration',
  props<{ user: User; password: string }>()
);
export const requestRegistrationSuccess = createAction(
  '[API] Request Registration Success',
  props<{ isRegistered: boolean }>()
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

// Logout User
export const requestLogout = createAction('[API] Request Logout');
export const requestLogoutSuccess = createAction(
  '[API] Request Logout Success',
  props<{ isAuth: boolean }>()
);
export const requestLogoutFailure = createAction(
  '[API] Request Logout Failure',
  props<{ error: any }>()
);

const authActions = union({
  requestRegistration,
  requestRegistrationSuccess,
  requestRegistrationFailure,
  requestLogin,
  requestLoginSuccess,
  requestLoginFailure,
  requestLogout,
  requestLogoutSuccess,
  requestLogoutFailure,
});

export type AuthActionTypes = typeof authActions;
