import { getSelectedUser, getUserLoaded } from './user.selectors';
import { USER_INITIAL_MOCK_STATE } from '../models/user-mock-state';

const state = USER_INITIAL_MOCK_STATE;

describe('User Selectors', () => {
  it('should retrieve the user from userState', () => {
    expect(getSelectedUser.projector(state)).toBe(state.user);
  });

  it('should retrieve isLoaded from userState', () => {
    expect(getUserLoaded.projector(state)).toBe(state.isLoaded);
  });
});
