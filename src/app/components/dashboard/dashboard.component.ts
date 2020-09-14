import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Budget } from 'src/app/models/budget';
import { Expense } from 'src/app/models/expense';
import { getBudgets, getExpenses } from 'src/app/store';
import { AppState } from 'src/app/store/application-state.model';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  budgets$: Observable<Map<number, Budget>>;
  expenses$: Observable<Map<number, Expense>>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.budgets$ = this.store$.pipe(select(getBudgets));
    this.expenses$ = this.store$.pipe(select(getExpenses));
  }
}
