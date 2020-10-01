import { UserState } from './user-state.model';

export const USER_INITIAL_MOCK_STATE: UserState = {
  user: {
    username: 'mrfox',
    email: 'mrfox@burrow.com',
    role: 'Program Manager',
  },
  isLoading: false,
  isLoaded: false,
};
