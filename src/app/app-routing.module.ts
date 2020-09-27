import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HeroesListComponent } from './hero-table/hero-table.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AuthGuard } from './auth.guard';
// import { HeroesGuard } from './hero-list/heroes.guard';

// import { HeroDetailsComponent } from './hero-table/hero-details/hero-details.component';

const routes: Routes = [
  // {
  //   path: 'heroes/:heroId',
  //   component: HeroDetailsComponent,
  //   canActivate: [HeroesGuard],
  // },
  // {
  //   path: 'heroes',
  //   component: HeroesListComponent,
  //   canActivate: [AuthGuard],
  // },
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
