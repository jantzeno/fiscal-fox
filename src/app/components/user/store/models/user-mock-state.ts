import { UserState } from './user-state.model';
import { User } from './user.model';

export const MOCK_USER: User = {
  username: 'mrfox',
  email: 'mrfox@burrow.com',
  role: 'Program Manager',
};

export const USER_INITIAL_MOCK_STATE: UserState = {
  user: MOCK_USER,
  isLoading: false,
  isLoaded: false,
};
