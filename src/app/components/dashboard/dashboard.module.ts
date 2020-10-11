import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../header/header.module';

const components = [DashboardComponent];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HeaderModule,
    ReactiveFormsModule,
  ],
  exports: [...components],
})
export class DashboardModule {}
