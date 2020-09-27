import { createAction, props } from '@ngrx/store';
import { NavigationGo } from '../models/router.models';

export const go = createAction('[Router] Go', props<NavigationGo>());
export const back = createAction('[Router] Back');
export const forward = createAction('[Router] Forward');

export const routeChange = createAction(
  '[Router] Route Change',
  props<{ path: string; params: any }>()
);
