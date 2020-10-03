import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from './details/details.component';
import { UserRoutingModule } from './user-routing.module';

const components = [UserDetailsComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, UserRoutingModule],
  exports: [...components],
})
export class UserModule {}
