import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './components/register/register.component';

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
  { path: 'login', component: LoginComponent },
  // Register
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
