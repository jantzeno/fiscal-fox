import { isLoggedIn, whoIsUser } from './auth.selectors';
import { AUTH_INITIAL_MOCK_STATE } from '../application-initial-mock-state';

const state = AUTH_INITIAL_MOCK_STATE;

describe('Auth Selectors', () => {
  it('should retrieve isAuth status from authState', () => {
    expect(isLoggedIn.projector(state)).toBe(state.isAuth);
  });

  it('should retrieve the user from authState', () => {
    expect(whoIsUser.projector(state)).toBe(state.user);
  });
});
