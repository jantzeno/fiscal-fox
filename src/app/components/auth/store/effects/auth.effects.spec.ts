import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import {
  AuthResponse,
  RegistrationResponse,
  LogoutResponse,
} from '../../../../services/http/models/auth-response.model';
import { AuthService } from '../../../../services/http/auth.service';
import { MOCK_STORE$ } from 'src/app/store/testing';
import * as AuthActions from '../actions/auth.actions';
import { MOCK_USER } from '../../../user/store/models/user-mock-state';
import { AuthEffects } from './auth.effects';
import { Router } from '@angular/router';

const mockAuthService = {
  register: () => of(Boolean),
  login: () => of(String),
  logout: () => of(Boolean),
  validateToken: () => of(String),
};

const mockRegistrationResponse: RegistrationResponse = { isRegistered: true };
const mockAuthResponse: AuthResponse = { token: 'token' };
const mockLogoutResponse: LogoutResponse = { isAuth: false };

describe('AuthEffects', () => {
  let actions$: Observable<any>;
  let authService: AuthService;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        { provide: Store, useValue: MOCK_STORE$ },
        { provide: AuthService, useValue: mockAuthService },
        // Fake route to satisfy Route in constructor
        { provide: Router, useValue: { navigateByUrl: () => '/' } },
      ],
    });
    effects = TestBed.inject(AuthEffects);
    authService = TestBed.inject(AuthService);
  });

  describe('register$', () => {
    it('should successfully register a new user', () => {
      spyOn(authService, 'register').and.returnValue(
        of(mockRegistrationResponse)
      );
      actions$ = hot('a', {
        a: AuthActions.requestRegistration({
          user: MOCK_USER,
          password: 'password',
        }),
      });

      const expected$ = cold('b', {
        b: AuthActions.requestRegistrationSuccess({ isRegistered: true }),
      });

      expect(effects.register$).toBeObservable(expected$);
    });

    it('should fail to register a new user', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(authService, 'register').and.returnValue(error$);
      actions$ = hot('a', {
        a: AuthActions.requestRegistration({
          user: MOCK_USER,
          password: 'password',
        }),
      });

      const expected$ = cold('b', {
        b: AuthActions.requestRegistrationFailure({ error: errMsg }),
      });

      expect(effects.register$).toBeObservable(expected$);
    });
  });

  describe('login$', () => {
    it('should successfully login', () => {
      spyOn(authService, 'login').and.returnValue(of(mockAuthResponse));
      actions$ = hot('a', {
        a: AuthActions.requestLogin({
          username: 'username',
          password: 'password',
        }),
      });

      const expected$ = cold('b', {
        b: AuthActions.requestLoginSuccess({ token: 'token' }),
      });

      expect(effects.login$).toBeObservable(expected$);
    });

    it('should fail to login', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(authService, 'login').and.returnValue(error$);
      actions$ = hot('a', {
        a: AuthActions.requestLogin({
          username: 'username',
          password: 'password',
        }),
      });

      const expected$ = cold('b', {
        b: AuthActions.requestLoginFailure({ error: errMsg }),
      });

      expect(effects.login$).toBeObservable(expected$);
    });
  });

  describe('logout$', () => {
    it('should successfully logout', () => {
      spyOn(authService, 'logout').and.returnValue(of(mockLogoutResponse));
      actions$ = hot('a', {
        a: AuthActions.requestLogout(),
      });

      const expected$ = cold('b', {
        b: AuthActions.requestLogoutSuccess({ isAuth: false }),
      });

      expect(effects.logout$).toBeObservable(expected$);
    });

    it('should fail to logout', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(authService, 'logout').and.returnValue(error$);
      actions$ = hot('a', {
        a: AuthActions.requestLogout(),
      });

      const expected$ = cold('b', {
        b: AuthActions.requestLogoutFailure({ error: errMsg }),
      });

      expect(effects.logout$).toBeObservable(expected$);
    });
  });

  describe('validateToken$', () => {
    it('should successfully validate a logged in user', () => {
      spyOn(authService, 'validateToken').and.returnValue(of(mockAuthResponse));
      actions$ = hot('a', {
        a: AuthActions.requestTokenCheck({ token: 'token' }),
      });

      const expected$ = cold('b', {
        b: AuthActions.requestTokenCheckSuccess(),
      });

      expect(effects.validateToken$).toBeObservable(expected$);
    });

    it('should fail to validate token', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(authService, 'validateToken').and.returnValue(error$);
      actions$ = hot('a', {
        a: AuthActions.requestTokenCheck({ token: 'token' }),
      });

      const expected$ = cold('b', {
        b: AuthActions.requestTokenCheckFailure({ error: errMsg }),
      });

      expect(effects.validateToken$).toBeObservable(expected$);
    });
  });
});
