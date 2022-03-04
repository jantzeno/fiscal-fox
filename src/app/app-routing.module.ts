import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  // Budgets
  {
    path: 'budgets',
    loadChildren: () =>
      import('./components/budgets/budgets.module').then(
        (m) => m.BudgetsModule
      ),
    canActivate: [AuthGuard],
  },
  // Expenses
  {
    path: 'expenses',
    loadChildren: () =>
      import('./components/expenses/expenses.module').then(
        (m) => m.ExpensesModule
      ),
    canActivate: [AuthGuard],
  },
  // User
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  // Login
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  // Register
  {
    path: 'register',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
