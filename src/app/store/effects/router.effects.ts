import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { ApplicationState } from '../models/application-state.model';
import { NavigationGo } from '../models/router.models';

import { go, back, forward, routeChange } from '../actions/router.actions';
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private store: Store<ApplicationState>
  ) {
    this.listenToRouter();
  }

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(go),
        tap((action) => {
          const { path, query: queryParams, extras }: NavigationGo = action;
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(forward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );

  private listenToRouter() {
    this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .subscribe((event: ActivationEnd) =>
        this.store.dispatch(
          routeChange({
            params: { ...event.snapshot.params },
            path: event.snapshot.routeConfig.path,
          })
        )
      );
  }
}
