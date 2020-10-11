import { AuthState } from './auth-state.model';

export const AUTH_INITIAL_STATE: AuthState = {
  isAuth: false,
  isRegistered: false,
  token: 'invalid',
  isLoading: false,
};
