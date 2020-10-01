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
} from '../actions/auth.actions';
import { AuthService } from '../../services/data/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  AuthResponse,
  LogoutResponse,
  RegistrationResponse,
} from '../../components/user/store/models/user.model';
import { ApplicationState } from '../models/application-state.model';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store$: Store<ApplicationState>
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

  // Logout
  // logout$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(requestLogout),
  //     withLatestFrom(this.store$.select(getToken)),
  //     switchMap(([action, token]) =>
  //       this.authService.logout(token).pipe(
  //         map(({ isAuth }: LogoutResponse) => requestLogoutSuccess({ isAuth })),
  //         catchError((error) => of(requestLogoutFailure({ error })))
  //       )
  //     )
  //   )
  // );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogout),
      switchMap((action) =>
        of(action).pipe(
          switchMap(() =>
            this.authService.logout().pipe(
              map(({ isAuth }: LogoutResponse) =>
                requestLogoutSuccess({ isAuth })
              ),
              catchError((error) => of(requestLogoutFailure({ error })))
            )
          )
        )
      )
    )
  );
}
