import { getSelectedUser } from './user.selectors';
import { USER_INITIAL_MOCK_STATE } from '../models/user-mock-state';

const state = USER_INITIAL_MOCK_STATE;

describe('User Selectors', () => {
  it('should retrieve the user from userState', () => {
    expect(getSelectedUser.projector(state)).toBe(state.user);
  });
});
