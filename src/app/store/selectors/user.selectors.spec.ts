import { getUser } from './user.selectors';
import { USER_LOADED_MOCK_STATE } from '../models/initial-mock-state';

const state = USER_LOADED_MOCK_STATE;

describe('User Selectors', () => {
  it('should retrieve the user from userState', () => {
    expect(getUser.projector(state)).toBe(state.user);
  });
});
