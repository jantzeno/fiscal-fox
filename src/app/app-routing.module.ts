import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AuthGuard } from './auth.guard';
import { BudgetGuard } from './components/budget/budget.guard';
import { RegisterComponent } from './components/register/register.component';
import { BudgetDetailsComponent } from './components/budget/details/details.component';

const routes: Routes = [
  {
    path: 'budgets/:budgetId',
    component: BudgetDetailsComponent,
    canActivate: [AuthGuard, BudgetGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
