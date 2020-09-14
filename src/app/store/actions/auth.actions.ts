import { createAction, props, union } from '@ngrx/store';

export const login = createAction('[Login] User Login');
export const logout = createAction('[Header] User Logout');

const authActions = union({
  login,
  logout,
});

export type AuthActionTypes = typeof authActions;
