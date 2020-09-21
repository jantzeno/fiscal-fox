import { UserState } from '../models/user-state.model';
import * as UserActions from '../actions/user.actions';
import {
  USER_INITIAL_MOCK_STATE,
  USER_LOADED_MOCK_STATE,
} from '../models/initial-mock-state';
import { userReducer } from './user.reducer';

describe('User Reducer', () => {
  it('should set users on `loadUser`', () => {
    const inputUser = USER_LOADED_MOCK_STATE.user;
    const action = UserActions.loadUserSuccess({ user: inputUser });
    const expected: UserState = {
      ...USER_INITIAL_MOCK_STATE,
      user: inputUser,
      isLoading: false,
      errorMessage: null,
    };
    const actual = userReducer(USER_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should modify a user on `updateUser`', () => {
    let inputUser = USER_LOADED_MOCK_STATE.user;
    inputUser.username = 'update';
    inputUser.email = 'update@update.com';
    const action = UserActions.updateUserSuccess({
      user: inputUser,
    });
    const expected: UserState = {
      ...USER_LOADED_MOCK_STATE,
      user: inputUser,
      isLoading: false,
      errorMessage: null,
    };
    const actual = userReducer(USER_LOADED_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
