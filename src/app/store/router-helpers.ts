import { ActionCreator } from '@ngrx/store';
import { routeChange } from './actions/router.actions';
import { Observable, OperatorFunction } from 'rxjs';
import { filter, map } from 'rxjs/operators';

type OfRoute<T> = [ActionCreator, T];

export const ofRoute = <T>(
  route: string | string[]
): OperatorFunction<OfRoute<T>, OfRoute<T>> =>
  filter(([action, state]) => {
    const isRouteAction = action.type === routeChange.type;
    if (isRouteAction) {
      const routePath = action['path'];
      const loaded = state['loaded'];
      if (Array.isArray(route)) {
        return route.includes(routePath) && !loaded;
      } else {
        return routePath === route && !loaded;
      }
    }
    return isRouteAction;
  });

export const load$ = <T>(loadAction, route: string | string[]) => (
  source: Observable<OfRoute<T>>
) =>
  source.pipe(
    ofRoute<T>(route),
    map(([action, state]) => {
      const heroId = action['params'].heroId;
      return loadAction({ heroId });
    })
  );
