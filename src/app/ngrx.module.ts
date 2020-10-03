import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  appState,
  AuthEffects,
  RouterEffects,
  CustomSerializer,
} from './store';
import { BudgetEffects } from './components/budgets/store';
import { ExpenseEffects } from './components/expenses/store';
import { UserEffects } from './components/user/store';
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
      UserEffects,
    ]),
  ],
})
export class NgrxModule {}
