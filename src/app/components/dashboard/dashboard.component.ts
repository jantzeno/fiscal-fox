import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Budget } from 'src/app/models/budget.model';
import { Expense } from 'src/app/models/expense.model';
import { getBudgets, getExpenses } from 'src/app/store';
import { ApplicationState } from 'src/app/store/models/application-state.model';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  budgets$: Observable<Array<Budget>>;
  expenses$: Observable<Array<Expense>>;

  constructor(private store$: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.budgets$ = this.store$.pipe(select(getBudgets));
    this.expenses$ = this.store$.pipe(select(getExpenses));
  }
}
