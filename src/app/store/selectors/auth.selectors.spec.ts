import { getIsAuth, getToken } from './auth.selectors';
import { AUTH_INITIAL_MOCK_STATE } from '../models/initial-mock-state';

const state = AUTH_INITIAL_MOCK_STATE;

describe('Auth Selectors', () => {
  it('should retrieve authState', () => {
    expect(getIsAuth.projector(state)).toBe(state.isAuth);
  });

  it('should retrieve token from authState', () => {
    expect(getToken.projector(state)).toBe(state.token);
  });
});
