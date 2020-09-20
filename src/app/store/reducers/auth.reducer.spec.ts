import { AuthState } from '../models/application-state.model';
import { login, logout } from '../actions/auth.actions';
import { AUTH_INITIAL_MOCK_STATE } from '../models/initial-mock-state';
import { authReducer } from './auth.reducer';

describe('Auth Reducer', () => {
  it('should set the isAuth boolean to true on `login`', () => {
    const action = login();
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: true,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the isAuth boolean to false on `logout`', () => {
    const action = logout();
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: false,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
