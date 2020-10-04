import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { UserResponse } from '../../../../services/http/models/user-response.model';
import { UserService } from '../../../../services/http/user.service';
import { MOCK_STORE$ } from 'src/app/store/testing';
import * as UserActions from '../actions';
import { MOCK_USER } from '../models/user-mock-state';
import { UserEffects } from './user.effects';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

const mockUsersService = {
  getUser: () => of(MOCK_USER),
  updateUser: () => of(MOCK_USER),
};

const mockUserResponse: UserResponse = { user: MOCK_USER };

describe('UsersEffects', () => {
  let actions$: Observable<any>;
  let userService: UserService;
  let effects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        { provide: Store, useValue: MOCK_STORE$ },
        { provide: UserService, useValue: mockUsersService },
      ],
    });
    effects = TestBed.inject(UserEffects);
    userService = TestBed.inject(UserService);
  });

  describe('loadUser$', () => {
    it('should successfully load a user', () => {
      spyOn(userService, 'getUser').and.returnValue(of(mockUserResponse));
      actions$ = hot('a', {
        a: UserActions.loadUser(),
      });

      const expected$ = cold('b', {
        b: UserActions.loadUserSuccess({ user: MOCK_USER }),
      });
      expect(effects.loadUser$).toBeObservable(expected$);
    });

    it('should fail to load a user', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(userService, 'getUser').and.returnValue(error$);
      actions$ = hot('a', {
        a: UserActions.loadUser(),
      });

      const expected$ = cold('b', {
        b: UserActions.loadUserFailure({ error: errMsg }),
      });

      expect(effects.loadUser$).toBeObservable(expected$);
    });
  });

  describe('updateUser$', () => {
    it('should successfully update a user', () => {
      spyOn(userService, 'updateUser').and.returnValue(of(mockUserResponse));
      actions$ = hot('a', {
        a: UserActions.updateUser({ user: MOCK_USER }),
      });

      const expected$ = cold('b', {
        b: UserActions.updateUserSuccess({ user: MOCK_USER }),
      });
      expect(effects.updateUser$).toBeObservable(expected$);
    });

    it('should fail to update a user', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(userService, 'updateUser').and.returnValue(error$);
      actions$ = hot('a', {
        a: UserActions.updateUser({ user: MOCK_USER }),
      });

      const expected$ = cold('b', {
        b: UserActions.updateUserFailure({ error: errMsg }),
      });

      expect(effects.updateUser$).toBeObservable(expected$);
    });
  });
});
