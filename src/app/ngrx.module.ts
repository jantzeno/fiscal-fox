import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  appState,
  AuthEffects,
  BudgetEffects,
  ExpenseEffects,
  RouterEffects,
  CustomSerializer,
} from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(appState),
    StoreDevtoolsModule.instrument({ maxAge: false }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      BudgetEffects,
      ExpenseEffects,
      RouterEffects,
    ]),
  ],
})
export class NgrxModule {}
