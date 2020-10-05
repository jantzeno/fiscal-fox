import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../services/http/auth.service';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  AuthResponse,
  RegistrationResponse,
} from '../../services/http/models/auth-response.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  // Register
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.requestRegistration),
      switchMap(({ user, password }) =>
        this.authService
          .register(user.username, password, user.email, user.role)
          .pipe(
            map(({ isRegistered }: RegistrationResponse) =>
              AuthActions.requestRegistrationSuccess({ isRegistered })
            ),
            catchError((error) =>
              of(AuthActions.requestRegistrationFailure({ error }))
            )
          )
      )
    )
  );

  // Register Side Effect
  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.requestRegistrationSuccess),
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
      ofType(AuthActions.requestLogin),
      switchMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map(({ token }: AuthResponse) =>
            AuthActions.requestLoginSuccess({ token })
          ),
          catchError((error) => of(AuthActions.requestLoginFailure({ error })))
        )
      )
    )
  );

  // Login Side Effect
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.requestLoginSuccess),
        tap(({ token }) => {
          localStorage.setItem('token', token);
          this.router.navigateByUrl('/dashboard');
        })
      ),
    { dispatch: false }
  );

  // Validate Token
  validateToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.requestTokenCheck),
      switchMap(() =>
        this.authService.validateToken().pipe(
          map(() => AuthActions.requestTokenCheckSuccess()),
          catchError((error) =>
            of(AuthActions.requestTokenCheckFailure({ error }))
          )
        )
      )
    )
  );

  // Validate Token Side Effect
  validateTokenFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.requestTokenCheckFailure),
        tap(({ error }) => {
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  // Logout
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.requestLogout),
      switchMap(() =>
        this.authService.logout().pipe(
          map(({ isAuth }) => AuthActions.requestLogoutSuccess({ isAuth })),
          catchError((error) => of(AuthActions.requestLogoutFailure({ error })))
        )
      )
    )
  );

  // Logout Side Effect
  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.requestLogoutSuccess),
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
