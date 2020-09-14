import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: false }),
  ],
})
export class NgrxModule {}
