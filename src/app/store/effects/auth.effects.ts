import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  requestLogin,
  requestLoginFailure,
  requestLoginSuccess,
  requestLogout,
  requestLogoutFailure,
  requestLogoutSuccess,
  requestRegistration,
  requestRegistrationFailure,
  requestRegistrationSuccess,
  requestTokenCheck,
  requestTokenCheckFailure,
  requestTokenCheckSuccess,
} from '../actions/auth.actions';
import { AuthService } from '../../services/data/auth.service';
import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';
import {
  AuthResponse,
  LogoutResponse,
  RegistrationResponse,
} from '../../components/user/store/models/user.model';
import { Router } from '@angular/router';
import { selectAuthState } from '../selectors';
import { routeChange } from '../actions/router.actions';
import { ApplicationState } from '../models/application-state.model';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<ApplicationState>
  ) {}

  // Register
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestRegistration),
      switchMap(({ user, password }) =>
        this.authService
          .register(user.username, password, user.email, user.role)
          .pipe(
            map(({ isRegistered }: RegistrationResponse) =>
              requestRegistrationSuccess({ isRegistered })
            ),
            catchError((error) => of(requestRegistrationFailure({ error })))
          )
      )
    )
  );

  // Register Side Effect
  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(requestRegistrationSuccess),
        tap(({ isRegistered }) => {
          if (isRegistered) {
            this.router.navigateByUrl('/login');
          }
        })
      ),
    { dispatch: false }
  );

  // Login
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogin),
      switchMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map(({ token }: AuthResponse) => requestLoginSuccess({ token })),
          catchError((error) => of(requestLoginFailure({ error })))
        )
      )
    )
  );

  // Login Side Effect
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(requestLoginSuccess),
        tap(({ token }) => {
          localStorage.setItem('token', token);
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  // Validate Token
  validateToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestTokenCheck),
      switchMap(() =>
        this.authService.validateToken().pipe(
          map(() => requestTokenCheckSuccess()),
          catchError((error) => of(requestTokenCheckFailure({ error })))
        )
      )
    )
  );

  // Logout
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogout),
      switchMap(() =>
        this.authService.logout().pipe(
          map(({ isAuth }) => requestLogoutSuccess({ isAuth })),
          catchError((error) => of(requestLoginFailure({ error })))
        )
      )
    )
  );

  // Logout Side Effect
  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(requestLogoutSuccess),
        tap(({ isAuth }) => {
          if (!isAuth) {
            localStorage.setItem('token', '');
            this.router.navigateByUrl('/');
          }
        })
      ),
    { dispatch: false }
  );
}
