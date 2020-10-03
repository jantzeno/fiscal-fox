import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import { UserService } from '../../../../services/http/user.service';
import { UserResponse } from '../../../../services/http/models/user-response.model';

@Injectable({ providedIn: 'root' })
export class UserEffects {
  // Get User
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap(() =>
        this.userService.getUser().pipe(
          map((user: UserResponse) =>
            UserActions.loadUserSuccess({
              ...user,
            })
          ),
          catchError((error) => of(UserActions.loadUserFailure({ error })))
        )
      )
    )
  );

  // Update User
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      switchMap(({ user }) =>
        this.userService.updateUser(user.username, user.email, user.role).pipe(
          map(({ user }: UserResponse) =>
            UserActions.updateUserSuccess({ user })
          ),
          catchError((error) => of(UserActions.updateUserFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
