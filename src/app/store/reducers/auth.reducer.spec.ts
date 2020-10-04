import { AuthState } from '../models/auth-state.model';
import {
  requestLogin,
  requestLoginSuccess,
  requestLoginFailure,
  requestLogout,
  requestLogoutSuccess,
  requestLogoutFailure,
  requestRegistration,
  requestRegistrationSuccess,
  requestRegistrationFailure,
} from '../actions/auth.actions';
import { AUTH_INITIAL_MOCK_STATE } from '../models/auth-mock-state';
import { authReducer } from './auth.reducer';

describe('Auth Reducer', () => {
  // Login Tests
  it('should set the isLoading boolean to true on `requestLogin`', () => {
    const action = requestLogin({ username: 'boggis', password: 'farmer' });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isLoading: true,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);
    expect(actual).toEqual(expected);
  });

  it('should set the token and isAuth on `requestLoginSuccess`', () => {
    const action = requestLoginSuccess({ token: 'token' });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      token: 'token',
      isAuth: true,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);
    expect(actual).toEqual(expected);
  });

  it('should set the error `requestLoginFailure`', () => {
    const action = requestLoginFailure({ error: 'error' });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);
    expect(actual).toEqual(expected);
  });

  // Logout Tests
  it('should set the isLoading boolean to true on `requestLogout`', () => {
    const action = requestLogout();
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isLoading: true,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);
    expect(actual).toEqual(expected);
  });

  it('should set the token and isAuth on `requestLoginSuccess`', () => {
    const action = requestLogoutSuccess({ isAuth: false });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      token: 'invalid',
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);
    expect(actual).toEqual(expected);
  });

  it('should set the error `requestLoginFailure`', () => {
    const action = requestLogoutFailure({ error: 'error' });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);
    expect(actual).toEqual(expected);
  });

  // Registration Tests
  it('should set the isLoading boolean to true on `requestRegistration`', () => {
    const action = requestRegistration({
      user: {
        username: 'test',
        email: 'test@test.com',
        role: 'program manager',
      },
      password: '12345',
    });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isLoading: true,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);
    expect(actual).toEqual(expected);
  });

  it('should set the token and isRegistered on `requestRegistrationSuccess`', () => {
    const action = requestRegistrationSuccess({ isRegistered: true });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isRegistered: true,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);
    expect(actual).toEqual(expected);
  });

  it('should set the error `requestRegistrationFailure`', () => {
    const action = requestRegistrationFailure({ error: 'error' });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);
    expect(actual).toEqual(expected);
  });
});
