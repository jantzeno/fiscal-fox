import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  requestLogin,
  requestLoginFailure,
  requestLoginSuccess,
} from '../actions/auth.actions';
import { AuthService } from '../../services/data/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthResponse } from '../../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
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

  constructor(private actions$: Actions, private authService: AuthService) {}
}
