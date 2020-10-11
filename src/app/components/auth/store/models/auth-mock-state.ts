import { AuthState } from './auth-state.model';

export const AUTH_INITIAL_MOCK_STATE: AuthState = {
  isAuth: false,
  isRegistered: false,
  token: 'invalid',
  isLoading: false,
};

export const AUTH_MOCK_STATE: AuthState = {
  isAuth: true,
  isRegistered: false,
  token: 'token',
  isLoading: false,
};

export const REGISTERED_MOCK_STATE: AuthState = {
  isAuth: false,
  isRegistered: true,
  token: 'invalid',
  isLoading: false,
};
