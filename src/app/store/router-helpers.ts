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
      const isLoaded = state['isLoaded'];
      if (Array.isArray(route)) {
        return route.includes(routePath) && !isLoaded;
      } else {
        return routePath === route && !isLoaded;
      }
    }
    return isRouteAction;
  });

export const loadBudgetRoute$ = <T>(loadAction, route: string | string[]) => (
  source: Observable<OfRoute<T>>
) =>
  source.pipe(
    ofRoute<T>(route),
    map(([action, state]) => {
      const budgetId = action['params'].budgetId;
      return loadAction({ budgetId });
    })
  );

export const loadExpenseRoute$ = <T>(loadAction, route: string | string[]) => (
  source: Observable<OfRoute<T>>
) =>
  source.pipe(
    ofRoute<T>(route),
    map(([action, state]) => {
      const expenseId = action['params'].expenseId;
      return loadAction({ expenseId });
    })
  );
